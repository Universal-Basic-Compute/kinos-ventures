'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

type ChatSettings = {
  darkMode: boolean;
  fontSize: 'small' | 'medium' | 'large';
  messageSound: boolean;
  ttsEnabled: boolean;
  sttEnabled: boolean;
};

export default function AiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello! I\'m KinOS AI. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [settings, setSettings] = useState<ChatSettings>({
    darkMode: true,
    fontSize: 'medium',
    messageSound: false, // Changed from true to false
    ttsEnabled: true,
    sttEnabled: true,
  });
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  // Initialize audio element
  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.onended = () => setIsPlaying(false);
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Scroll to bottom of messages when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat is opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 60000);
    }
  }, [isOpen]);

  // Play TTS for new assistant messages
  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.role === 'assistant' && lastMessage.content && settings.ttsEnabled && !isLoading) {
      // Don't auto-play the welcome message
      if (messages.length > 1) {
        playTTS(lastMessage.content);
      }
    }
  }, [messages, isLoading, settings.ttsEnabled]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Call the KinOS Engine API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: input,
          history: messages.slice(-10) // Send last 10 messages for context
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from AI');
      }

      const data = await response.json();
      
      // Debug the response
      console.log('API Response:', data);
      
      // Check if data.response exists and is a string
      if (!data.response) {
        console.error('Response is empty or undefined:', data);
        throw new Error('Empty response from API');
      }
      
      // Add the assistant message
      setMessages(prev => [
        ...prev, 
        { 
          role: 'assistant', 
          content: data.response 
        }
      ]);

      // Play sound if enabled
      if (settings.messageSound) {
        try {
          // Check if the file exists first by using fetch
          fetch('/sounds/message.mp3', { method: 'HEAD' })
            .then(response => {
              if (response.ok) {
                const audio = new Audio('/sounds/message.mp3');
                audio.volume = 0.5;
                audio.play().catch(e => {
                  console.log('Audio play failed, using fallback:', e);
                  // Create a silent audio as fallback
                  const silentAudio = new Audio("data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjI5LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAABIADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV6urq6urq6urq6urq6urq6urq6urq6urq6v////////////////////////////////8AAAAATGF2YzU4LjU0AAAAAAAAAAAAAAAAJAAAAAAAAAAAASDs90hvAAAAAAAAAAAAAAAAAAAA//MUZAAAAAGkAAAAAAAAA0gAAAAATEFN//MUZAMAAAGkAAAAAAAAA0gAAAAARTMu//MUZAYAAAGkAAAAAAAAA0gAAAAAOTku//MUZAkAAAGkAAAAAAAAA0gAAAAANVVV");
                  silentAudio.play().catch(e => console.log('Silent audio fallback failed:', e));
                });
              } else {
                console.log('Sound file not found, using silent audio');
                const silentAudio = new Audio("data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjI5LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAABIADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV6urq6urq6urq6urq6urq6urq6urq6urq6v////////////////////////////////8AAAAATGF2YzU4LjU0AAAAAAAAAAAAAAAAJAAAAAAAAAAAASDs90hvAAAAAAAAAAAAAAAAAAAA//MUZAAAAAGkAAAAAAAAA0gAAAAATEFN//MUZAMAAAGkAAAAAAAAA0gAAAAARTMu//MUZAYAAAGkAAAAAAAAA0gAAAAAOTku//MUZAkAAAGkAAAAAAAAA0gAAAAANVVV");
                silentAudio.play().catch(e => console.log('Silent audio fallback failed:', e));
              }
            })
            .catch(error => {
              console.log('Error checking sound file:', error);
            });
        } catch (e) {
          console.log('Audio creation failed:', e);
        }
      }
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setMessages(prev => [
        ...prev, 
        { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle chat with Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      
      // Close chat with Escape
      if (e.key === 'Escape' && isOpen) {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          setIsOpen(false);
        }
      }

      // Toggle fullscreen with F
      if (e.key === 'f' && isOpen && !e.ctrlKey && !e.metaKey && !e.altKey && 
          !(document.activeElement instanceof HTMLInputElement) &&
          !(document.activeElement instanceof HTMLTextAreaElement)) {
        e.preventDefault();
        setIsFullscreen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isFullscreen]);

  // Handle textarea key press
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Submit on Enter without Shift key
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent);
    }
  };

  // Auto-resize textarea based on content
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, 150)}px`;
    }
  }, [input]);

  // Get font size class based on settings
  const getFontSizeClass = () => {
    switch (settings.fontSize) {
      case 'small': return 'text-sm';
      case 'large': return 'text-lg';
      default: return 'text-base';
    }
  };

  // Text-to-Speech function
  const playTTS = async (text: string) => {
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
      return;
    }

    // Check if text is defined before processing
    if (!text) {
      console.error('Text is undefined or empty');
      return;
    }

    // Extract plain text from markdown
    const plainText = text.replace(/\*\*(.*?)\*\*/g, '$1')  // Bold
                          .replace(/\*(.*?)\*/g, '$1')      // Italic
                          .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Links
                          .replace(/#{1,6}\s(.*?)(\n|$)/g, '$1') // Headers
                          .replace(/```.*?\n([\s\S]*?)```/g, 'Code block') // Code blocks
                          .replace(/`(.*?)`/g, '$1')        // Inline code
                          .replace(/>\s(.*?)(\n|$)/g, '$1') // Blockquotes
                          .replace(/\n\s*[-*+]\s(.*?)(\n|$)/g, '$1') // Unordered lists
                          .replace(/\n\s*\d+\.\s(.*?)(\n|$)/g, '$1'); // Ordered lists

    try {
      setIsPlaying(true);
      
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: plainText }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate speech');
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      
      if (audioRef.current) {
        audioRef.current.src = audioUrl;
        audioRef.current.play().catch(e => {
          console.error('Failed to play audio:', e);
          setIsPlaying(false);
        });
      }
    } catch (error) {
      console.error('TTS error:', error);
      setIsPlaying(false);
    }
  };

  // Speech-to-Text functions
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        await transcribeAudio(audioBlob);
        
        // Stop all tracks to release the microphone
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const transcribeAudio = async (audioBlob: Blob) => {
    try {
      const formData = new FormData();
      formData.append('file', audioBlob, 'recording.wav');

      const response = await fetch('/api/stt', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to transcribe audio');
      }

      const data = await response.json();
      if (data.text) {
        setInput(data.text);
        
        // Auto-submit if the setting is enabled and there's a clear instruction
        if (data.text.trim().endsWith('?') || 
            data.text.toLowerCase().includes('tell me') || 
            data.text.toLowerCase().includes('what is') ||
            data.text.toLowerCase().includes('how to')) {
          setTimeout(() => {
            const event = new Event('submit', { bubbles: true, cancelable: true }) as unknown as React.FormEvent;
            handleSubmit(event);
          }, 60000);
        }
      }
    } catch (error) {
      console.error('Error transcribing audio:', error);
    }
  };

  // Toggle TTS for a specific message
  const toggleMessageTTS = (content: string) => {
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
    } else {
      playTTS(content);
    }
  };

  return (
    <>
      {/* Keyboard shortcut hint */}
      <div className="fixed bottom-24 right-6 z-40 text-xs text-gray-400 pointer-events-none select-none">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
            >
              Press Ctrl+K
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="fixed bottom-6 right-6 z-50" style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem' }}>
        {/* Chat button */}
        <AnimatePresence>
          {!isOpen && (
            <motion.button 
              onClick={() => setIsOpen(true)}
              className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 flex items-center justify-center shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Open AI Chat"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Chat panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                width: isFullscreen ? '100vw' : 'min(90vw, 600px)',
                height: isFullscreen ? '100vh' : 'min(90vh, 700px)',
                borderRadius: isFullscreen ? '0' : '1rem',
              }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className={`${isFullscreen ? 'fixed inset-0' : 'absolute bottom-16 right-0'} bg-slate-800 border border-slate-700 shadow-2xl overflow-hidden flex flex-col`}
              style={{ 
                zIndex: isFullscreen ? 100 : 50,
                maxHeight: isFullscreen ? '100vh' : 'calc(100vh - 100px)',
                transform: isFullscreen ? 'none' : undefined
              }}
            >
              {/* Chat header */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-4 flex items-center justify-between border-b border-slate-700">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center mr-3 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">KinOS AI</h3>
                    <p className="text-xs text-gray-400">Powered by KinOS Engine</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {/* Settings button */}
                  <button 
                    onClick={() => setShowSettings(!showSettings)}
                    className={`text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-slate-700 ${showSettings ? 'bg-slate-700 text-white' : ''}`}
                    aria-label="Chat settings"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                  </button>
                  
                  {/* Fullscreen button */}
                  <button 
                    onClick={() => setIsFullscreen(!isFullscreen)}
                    className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-slate-700"
                    aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                  >
                    {isFullscreen ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                      </svg>
                    )}
                  </button>
                  
                  {/* Close button */}
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-slate-700"
                    aria-label="Close chat"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Settings panel */}
              <AnimatePresence>
                {showSettings && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-slate-900 border-b border-slate-700 overflow-hidden"
                  >
                    <div className="p-4 space-y-4">
                      <h4 className="font-medium text-white mb-2">Chat Settings</h4>
                      
                      {/* Font Size */}
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Font Size</label>
                        <div className="flex space-x-2">
                          {['small', 'medium', 'large'].map((size) => (
                            <button
                              key={size}
                              onClick={() => setSettings({...settings, fontSize: size as any})}
                              className={`px-3 py-1 rounded-md text-sm ${
                                settings.fontSize === size 
                                  ? 'bg-blue-600 text-white' 
                                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                              }`}
                            >
                              {size.charAt(0).toUpperCase() + size.slice(1)}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      {/* Message Sound */}
                      <div className="flex items-center justify-between">
                        <label className="text-sm text-gray-400">Message Sound</label>
                        <button
                          onClick={() => setSettings({...settings, messageSound: !settings.messageSound})}
                          className={`w-12 h-6 rounded-full flex items-center transition-colors duration-300 focus:outline-none ${
                            settings.messageSound ? 'bg-blue-600 justify-end' : 'bg-slate-700 justify-start'
                          }`}
                        >
                          <span className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300`}></span>
                        </button>
                      </div>
                      
                      {/* Text-to-Speech */}
                      <div className="flex items-center justify-between">
                        <label className="text-sm text-gray-400">Text-to-Speech</label>
                        <button
                          onClick={() => setSettings({...settings, ttsEnabled: !settings.ttsEnabled})}
                          className={`w-12 h-6 rounded-full flex items-center transition-colors duration-300 focus:outline-none ${
                            settings.ttsEnabled ? 'bg-blue-600 justify-end' : 'bg-slate-700 justify-start'
                          }`}
                        >
                          <span className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300`}></span>
                        </button>
                      </div>
                      
                      {/* Speech-to-Text */}
                      <div className="flex items-center justify-between">
                        <label className="text-sm text-gray-400">Speech-to-Text</label>
                        <button
                          onClick={() => setSettings({...settings, sttEnabled: !settings.sttEnabled})}
                          className={`w-12 h-6 rounded-full flex items-center transition-colors duration-300 focus:outline-none ${
                            settings.sttEnabled ? 'bg-blue-600 justify-end' : 'bg-slate-700 justify-start'
                          }`}
                        >
                          <span className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300`}></span>
                        </button>
                      </div>
                      
                      {/* Dark Mode */}
                      <div className="flex items-center justify-between">
                        <label className="text-sm text-gray-400">Dark Mode</label>
                        <button
                          onClick={() => setSettings({...settings, darkMode: !settings.darkMode})}
                          className={`w-12 h-6 rounded-full flex items-center transition-colors duration-300 focus:outline-none ${
                            settings.darkMode ? 'bg-blue-600 justify-end' : 'bg-slate-700 justify-start'
                          }`}
                        >
                          <span className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300`}></span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Chat messages */}
              <div className={`flex-grow overflow-y-auto p-4 flex flex-col gap-4 bg-gradient-to-b from-slate-800 to-slate-900 ${getFontSizeClass()}`}>
                {messages.map((message, index) => (
                  <motion.div 
                    key={index} 
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {message.role === 'assistant' && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center mr-2 shadow-md flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                      </div>
                    )}
                    <div 
                      className={`max-w-[80%] p-3 rounded-2xl shadow-md overflow-hidden group relative ${
                        message.role === 'user' 
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-br-none markdown-user' 
                          : 'bg-slate-700 text-white rounded-bl-none markdown-assistant'
                      }`}
                    >
                      <ReactMarkdown 
                        remarkPlugins={[remarkGfm]}
                        components={{
                          p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />,
                          a: ({node, ...props}) => <a className="text-blue-300 underline hover:text-blue-200" {...props} />,
                          ul: ({node, ...props}) => <ul className="list-disc pl-5 mb-2" {...props} />,
                          ol: ({node, ...props}) => <ol className="list-decimal pl-5 mb-2" {...props} />,
                          li: ({node, ...props}) => <li className="mb-1" {...props} />,
                          h1: ({node, ...props}) => <h1 className="text-xl font-bold mb-2" {...props} />,
                          h2: ({node, ...props}) => <h2 className="text-lg font-bold mb-2" {...props} />,
                          h3: ({node, ...props}) => <h3 className="text-md font-bold mb-2" {...props} />,
                          code: ({node, inline, ...props}: {node?: any, inline?: boolean, [key: string]: any}) => 
                            inline 
                              ? <code className="bg-slate-800/50 px-1 py-0.5 rounded" {...props} />
                              : <code className="block bg-slate-800/50 p-2 rounded my-2 overflow-x-auto" {...props} />,
                          pre: ({node, ...props}) => <pre className="bg-slate-800/50 p-2 rounded my-2 overflow-x-auto" {...props} />,
                          blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-slate-600 pl-4 italic my-2" {...props} />,
                        }}
                      >
                        {message.content}
                      </ReactMarkdown>
                      
                      {/* TTS button for assistant messages */}
                      {message.role === 'assistant' && settings.ttsEnabled && (
                        <button
                          onClick={() => toggleMessageTTS(message.content)}
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-full bg-slate-800/50 hover:bg-slate-800"
                          aria-label={isPlaying ? "Stop speaking" : "Speak message"}
                        >
                          {isPlaying ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="6" y="4" width="4" height="16"></rect>
                              <rect x="14" y="4" width="4" height="16"></rect>
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                            </svg>
                          )}
                        </button>
                      )}
                    </div>
                    {message.role === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center ml-2 shadow-md flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                    )}
                  </motion.div>
                ))}
                {isLoading && (
                  <motion.div 
                    className="flex justify-start"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center mr-2 shadow-md flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                    <div className="bg-slate-700 text-white p-3 rounded-2xl rounded-bl-none max-w-[80%] shadow-md">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat input */}
              <form onSubmit={handleSubmit} className="p-4 border-t border-slate-700 bg-slate-900">
                <div className="flex gap-2 items-start">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask KinOS AI anything... (Shift+Enter for new line)"
                    className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none min-h-[50px] max-h-[150px] overflow-y-auto"
                    rows={Math.min(input.split('\n').length, 3)}
                  />
                  
                  {/* Voice input button */}
                  {settings.sttEnabled && (
                    <motion.button 
                      type="button"
                      onClick={isRecording ? stopRecording : startRecording}
                      className={`${
                        isRecording 
                          ? 'bg-red-600 hover:bg-red-700' 
                          : 'bg-slate-700 hover:bg-slate-600'
                      } rounded-full p-3 text-white transition-colors shadow-md self-end`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={isRecording ? "Stop recording" : "Start voice input"}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                        <line x1="12" y1="19" x2="12" y2="23"></line>
                        <line x1="8" y1="23" x2="16" y2="23"></line>
                      </svg>
                    </motion.button>
                  )}
                  
                  <motion.button 
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-slate-700 disabled:to-slate-700 disabled:opacity-50 rounded-full p-3 text-white transition-colors shadow-md self-end"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Send message"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </motion.button>
                </div>
                <div className="mt-2 text-xs text-center text-gray-500">
                  {isRecording ? (
                    <span className="text-red-400 animate-pulse">Recording... Click the microphone to stop</span>
                  ) : (
                    <span>Press Enter to send, Shift+Enter for new line, Esc to close, F to toggle fullscreen</span>
                  )}
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
