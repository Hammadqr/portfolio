export const personalInfo = {
  name: "Hammad Qaiser",
  title: "AI Engineer",
  email: "hammad@example.com",
  location: "Pakistan",
  bio: "Passionate AI Engineer with expertise in machine learning, generative AI, and transformer architectures. I specialize in building intelligent applications using RAG systems, developing synthetic datasets, and creating innovative AI-powered solutions.",
  // focal point for avatar image as CSS object-position (horizontal% vertical%)
  avatarFocal: '50% 20%',
};

export const skills = {
  technical: [
    { name: "Python & TensorFlow", level: 95 },
    { name: "PyTorch & Transformers", level: 92 },
    { name: "RAG Applications", level: 90 },
    { name: "LangChain & Vector DBs", level: 88 },
    { name: "OpenAI APIs & GenAI", level: 85 },
    { name: "Data Science & MLOps", level: 87 },
    { name: "React & FastAPI", level: 85 },
    { name: "Docker & Cloud AI Services", level: 82 },
  ],
  professional: [
    "Machine Learning", "AI System Design", "Research & Development", "Data Analysis", "AI Ethics"
  ]
};

export const certificates = [
  {
    id: 1,
    title: "Machine Learning Specialization",
    issuer: "Stanford University (Coursera)",
    date: "2023",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
    credentialId: "ML-2023-001",
    skills: ["Machine Learning", "Python", "Neural Networks"]
  },
  {
    id: 2,
    title: "Deep Learning with PyTorch",
    issuer: "Facebook AI (edX)",
    date: "2023",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
    credentialId: "DL-PT-2023",
    skills: ["PyTorch", "Deep Learning", "Computer Vision"]
  },
  {
    id: 3,
    title: "Generative AI with Large Language Models",
    issuer: "DeepLearning.AI",
    date: "2024",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop",
    credentialId: "GENAI-LLM-2024",
    skills: ["LLMs", "Transformers", "Fine-tuning"]
  },
  {
    id: 4,
    title: "MLOps Fundamentals",
    issuer: "Google Cloud",
    date: "2024",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop",
    credentialId: "MLOPS-GCP-2024",
    skills: ["MLOps", "Model Deployment", "Cloud AI"]
  },
  {
    id: 5,
    title: "Natural Language Processing Specialization",
    issuer: "DeepLearning.AI",
    date: "2023",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=300&h=200&fit=crop",
    credentialId: "NLP-SPEC-2023",
    skills: ["NLP", "BERT", "Transformers"]
  },
  {
    id: 6,
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2023",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=200&fit=crop",
    credentialId: "TF-DEV-2023",
    skills: ["TensorFlow", "Keras", "Model Optimization"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Synthetic Dataset Generation System",
    shortDescription: "AI-powered synthetic data generation for training ML models",
    description: "My final year university project focused on generating high-quality synthetic datasets using GANs and VAEs. The system creates realistic synthetic data that maintains statistical properties of original datasets while ensuring privacy. Built with PyTorch and includes evaluation metrics for data quality assessment.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["Python", "PyTorch", "GANs", "VAEs", "Machine Learning", "Data Science"],
    github: "https://github.com/hammadqaiser/synthetic-dataset-generation",
    liveDemo: "https://synthetic-data-demo.streamlit.app",
    features: [
      "GAN and VAE-based data generation",
      "Statistical similarity preservation",
      "Privacy-preserving data synthesis",
      "Quality assessment metrics",
      "Multiple data types support",
      "Interactive web interface for generation"
    ],
    challenges: "Ensuring generated data maintains statistical properties while being distinguishable enough to train robust models without overfitting.",
    duration: "6 months",
    role: "AI Researcher & Developer"
  },
  {
    id: 2,
    title: "RAG-Powered Document Q&A System",
    shortDescription: "Intelligent document analysis using Retrieval-Augmented Generation",
    description: "An advanced RAG application that enables natural language querying over large document collections. Built with LangChain, ChromaDB, and OpenAI's GPT models. Features semantic search, context-aware responses, and multi-document reasoning with real-time document indexing.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    tags: ["Python", "LangChain", "ChromaDB", "OpenAI", "FastAPI", "React"],
    github: "https://github.com/hammadqaiser/rag-document-qa",
    liveDemo: "https://rag-qa-demo.herokuapp.com",
    features: [
      "Semantic document search and retrieval",
      "Context-aware question answering",
      "Multi-document reasoning",
      "Real-time document indexing",
      "Source citation and verification",
      "Conversation memory and follow-ups"
    ],
    challenges: "Optimizing vector embeddings for large document collections and managing context windows for complex multi-document queries.",
    duration: "3 months",
    role: "AI Engineer"
  },
  {
    id: 3,
    title: "Transformer-Based Text Classifier",
    shortDescription: "Custom transformer architecture for multi-label text classification",
    description: "A specialized transformer model built from scratch for multi-label text classification tasks. Implements attention mechanisms, positional encoding, and custom training loops. Achieved 94% accuracy on benchmark datasets with efficient inference optimization.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop",
    tags: ["Python", "PyTorch", "Transformers", "NLP", "Attention", "BERT"],
    github: "https://github.com/hammadqaiser/transformer-text-classifier",
    liveDemo: "https://transformer-classifier-demo.streamlit.app",
    features: [
      "Custom transformer architecture",
      "Multi-head attention implementation",
      "Positional encoding and embeddings",
      "Multi-label classification support",
      "Model optimization and quantization",
      "Real-time inference API"
    ],
    challenges: "Implementing efficient attention mechanisms and optimizing model size while maintaining performance for deployment.",
    duration: "4 months",
    role: "ML Engineer & Researcher"
  },
  {
    id: 4,
    title: "AI-Powered Content Generator",
    shortDescription: "GenAI application for automated content creation and editing",
    description: "A comprehensive content generation platform using GPT-4 and Claude APIs. Features include blog post generation, social media content creation, image generation with DALL-E, and intelligent content editing. Built with React frontend and FastAPI backend.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    tags: ["Python", "OpenAI", "Claude", "DALL-E", "React", "FastAPI"],
    github: "https://github.com/hammadqaiser/ai-content-generator",
    liveDemo: "https://ai-content-gen-demo.vercel.app",
    features: [
      "Multi-modal content generation",
      "AI-powered editing and refinement",
      "Brand voice consistency",
      "SEO optimization suggestions",
      "Batch content processing",
      "Integration with social platforms"
    ],
    challenges: "Maintaining content quality consistency across different AI models and implementing effective prompt engineering for various content types.",
    duration: "2.5 months",
    role: "GenAI Developer"
  },
  {
    id: 5,
    title: "Computer Vision Analytics Platform",
    shortDescription: "Real-time object detection and tracking system",
    description: "An advanced computer vision platform for real-time object detection, tracking, and analytics. Built with YOLOv8, OpenCV, and deployed on edge devices. Features include crowd counting, behavior analysis, and automated alert systems for security applications.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
    tags: ["Python", "YOLOv8", "OpenCV", "TensorRT", "FastAPI", "WebSocket"],
    github: "https://github.com/hammadqaiser/cv-analytics-platform",
    liveDemo: "https://cv-analytics-demo.streamlit.app",
    features: [
      "Real-time object detection and tracking",
      "Multi-camera support and monitoring",
      "Crowd counting and density analysis",
      "Behavior pattern recognition",
      "Automated alert system",
      "Edge deployment optimization"
    ],
    challenges: "Optimizing model inference speed for real-time processing while maintaining accuracy across different lighting and environmental conditions.",
    duration: "4 months",
    role: "Computer Vision Engineer"
  },
  {
    id: 6,
    title: "Intelligent Chatbot Framework",
    shortDescription: "Multi-domain conversational AI with context understanding",
    description: "A sophisticated chatbot framework combining retrieval-augmented generation with fine-tuned language models. Features include multi-domain knowledge, context preservation, intent recognition, and integration with business systems. Built for customer service automation.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
    tags: ["Python", "Transformers", "Rasa", "PostgreSQL", "Docker", "Kubernetes"],
    github: "https://github.com/hammadqaiser/intelligent-chatbot",
    liveDemo: "https://chatbot-framework-demo.herokuapp.com",
    features: [
      "Multi-domain knowledge base",
      "Context-aware conversations",
      "Intent recognition and NER",
      "Integration with CRM systems",
      "Multilingual support",
      "Analytics and conversation insights"
    ],
    challenges: "Building robust context management across long conversations and ensuring consistent personality while handling diverse query types.",
    duration: "5 months",
    role: "Conversational AI Engineer"
  }
];