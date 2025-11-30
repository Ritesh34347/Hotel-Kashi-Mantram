import React, { useState, useCallback } from 'react';
import { Upload, X, Check, BrainCircuit, Save } from 'lucide-react';
import { analyzeImage } from '../services/geminiService';
import { ImageAnalysisResult, RoomCategory } from '../types';

interface UploadedFile {
  id: string;
  file: File;
  preview: string;
  status: 'pending' | 'analyzing' | 'complete' | 'error';
  result?: ImageAnalysisResult;
}

const Admin = () => {
  const [uploads, setUploads] = useState<UploadedFile[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  // Helper to read file as Base64
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        // Remove data URL prefix (e.g., "data:image/jpeg;base64,")
        const base64 = result.split(',')[1];
        resolve(base64);
      };
      reader.onerror = error => reject(error);
    });
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map(item => {
        const file = item as File;
        return {
          id: Math.random().toString(36).substr(2, 9),
          file,
          preview: URL.createObjectURL(file),
          status: 'pending' as const
        };
      });
      setUploads(prev => [...prev, ...newFiles]);
    }
  };

  const processImages = async () => {
    setIsProcessing(true);
    const pending = uploads.filter(u => u.status === 'pending');

    for (const item of pending) {
      setUploads(prev => prev.map(u => u.id === item.id ? { ...u, status: 'analyzing' } : u));
      
      try {
        const base64 = await fileToBase64(item.file);
        const result = await analyzeImage(base64, item.file.type);
        
        setUploads(prev => prev.map(u => u.id === item.id ? { 
          ...u, 
          status: 'complete',
          result: result
        } : u));
      } catch (error) {
        console.error("Error processing image", error);
        setUploads(prev => prev.map(u => u.id === item.id ? { ...u, status: 'error' } : u));
      }
    }
    setIsProcessing(false);
  };

  const updateCategory = (id: string, newCategory: string) => {
     setUploads(prev => prev.map(u => {
         if(u.id === id && u.result) {
             return { ...u, result: { ...u.result, category: newCategory as RoomCategory }};
         }
         return u;
     }));
  };

  const removeUpload = (id: string) => {
      setUploads(prev => prev.filter(u => u.id !== id));
  };

  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
            <div>
                <h1 className="text-3xl font-serif font-bold text-stone-800">Admin Dashboard</h1>
                <p className="text-stone-500">Upload images and let Gemini AI categorize them.</p>
            </div>
            <button 
                onClick={() => alert("Saved to Database (Mock)")}
                className="flex items-center gap-2 bg-stone-900 text-white px-6 py-3 rounded-lg hover:bg-stone-800 transition-colors"
            >
                <Save size={18} /> Save All Changes
            </button>
        </div>

        {/* Upload Area */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8 mb-8 text-center border-dashed border-2 border-stone-300 hover:border-saffron-400 transition-colors">
            <Upload className="mx-auto h-12 w-12 text-stone-400 mb-4" />
            <h3 className="text-lg font-medium text-stone-900 mb-2">Upload Room Photos</h3>
            <p className="text-sm text-stone-500 mb-6">PNG, JPG up to 10MB</p>
            <input 
                type="file" 
                multiple 
                accept="image/*"
                onChange={handleFileSelect}
                className="block w-full text-sm text-stone-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-saffron-50 file:text-saffron-700
                hover:file:bg-saffron-100
                mx-auto max-w-xs cursor-pointer"
            />
        </div>

        {uploads.length > 0 && (
            <div className="mb-8">
                 <button 
                    onClick={processImages} 
                    disabled={isProcessing || !uploads.some(u => u.status === 'pending')}
                    className="flex items-center justify-center w-full md:w-auto gap-2 bg-saffron-600 text-white px-8 py-3 rounded-lg hover:bg-saffron-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-6"
                >
                    {isProcessing ? <BrainCircuit className="animate-pulse" /> : <BrainCircuit />}
                    {isProcessing ? "Analyzing with Gemini..." : "Auto-Categorize Pending Images"}
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {uploads.map(item => (
                        <div key={item.id} className="bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden flex flex-col md:flex-row">
                            <div className="w-full md:w-1/3 h-48 md:h-auto relative">
                                <img src={item.preview} alt="Preview" className="w-full h-full object-cover" />
                                {item.status === 'analyzing' && (
                                    <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-saffron-600"></div>
                                    </div>
                                )}
                                <button 
                                    onClick={() => removeUpload(item.id)}
                                    className="absolute top-2 left-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                                >
                                    <X size={14} />
                                </button>
                            </div>
                            
                            <div className="p-4 flex-grow space-y-3">
                                <div className="flex justify-between items-start">
                                    <div className="text-xs font-mono text-stone-400 truncate w-32">{item.file.name}</div>
                                    {item.status === 'complete' && (
                                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                                            <Check size={12} className="mr-1" /> {(item.result!.confidence * 100).toFixed(0)}% Match
                                        </span>
                                    )}
                                </div>

                                {item.status === 'complete' && item.result ? (
                                    <>
                                        <div>
                                            <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Category</label>
                                            <select 
                                                value={item.result.category}
                                                onChange={(e) => updateCategory(item.id, e.target.value)}
                                                className="block w-full rounded-md border-stone-300 shadow-sm focus:border-saffron-500 focus:ring-saffron-500 sm:text-sm p-2 border bg-stone-50"
                                            >
                                                {Object.values(RoomCategory).map(cat => (
                                                    <option key={cat} value={cat}>{cat}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Generated Caption</label>
                                            <textarea 
                                                className="w-full text-xs text-stone-600 border border-stone-200 rounded p-2 h-16"
                                                defaultValue={item.result.caption}
                                            />
                                        </div>
                                    </>
                                ) : (
                                    <div className="h-full flex items-center justify-center text-stone-400 text-sm italic">
                                        {item.status === 'pending' ? 'Ready to analyze' : 'Processing...'}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default Admin;