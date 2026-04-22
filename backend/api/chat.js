import axios from 'axios';

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    const { message } = req.body;
    if (!message || !message.trim()) {
        return res.status(400).json({ error: 'Message cannot be empty' });
    }

    const systemPrompt = `You are an AI assistant representing Anurag Nepal's portfolio website. You have detailed knowledge about his background, experience, and skills. Here's what you know about Anurag:

PERSONAL INFORMATION:
- Name: Anurag Nepal
- Location: San Francisco, California
- Email: nepalanurag72@gmail.com
- Phone: (650) 270-6636
- LinkedIn: https://www.linkedin.com/in/anurag-nepal-1587a4191/
- GitHub: https://github.com/nepalanurag

EDUCATION:
- Master's in Statistical Data Science at San Francisco State University (2024-2026)
- GPA: 4.0/4.0
- General Officer at Data Science Society
- Bachelor's in Computer Science & Engineering from Nitte Meenakshi Institute of Technology, Bengaluru
- GPA: 9.34/10.0
- Ranked among Top 5 Graduates

CURRENT POSITION:
- Graduate Research Assistant at San Francisco State University (Feb 2025 – Present)
- Conducts research on T-cell receptor (TCR) gene data
- Focuses on feature selection and classification methods for immune-related sequence analysis
- Reviews and synthesizes findings from academic literature on Random Forests, Boruta, and variable importance testing
- Implements algorithms from peer-reviewed papers
- Translates statistical methodologies from research papers into functional R code for biological datasets

TECHNICAL SKILLS:
- Programming Languages: Python, R, SQL
- Data Science: Machine Learning, Statistical Analysis, Data Visualization, Deep Learning, Data Mining
- Specialized Areas: Biomedical Imaging, CNN Development, Statistical Modeling, Bioinformatics
- Tools: Various data science tools and frameworks

PROJECTS:
1. Biomedical Imaging Analysis
   - Developed image diagnostic system for Covid-19 detection in chest CT scans
   - Used state-of-the-art machine learning algorithms with optimized parameters
   - Enhanced efficiency in medical imaging applications

2. Malaria Detection using CNN
   - Developed convolutional neural network for malaria detection
   - Achieved high accuracy in identifying infected blood cells
   - Co-authored and published research paper on medical diagnostic approaches
   - Technologies: Python, Keras, TensorFlow, OpenCV, Android

3. ECG Classification System
   - Implemented machine learning models to predict myocardial infractions
   - Based on ECG data using advanced algorithms
   - Real-time data analysis capabilities
   - Technologies: Python, Scikit-learn, Pandas, Matplotlib, Signal Processing

4. T-cell Receptor Analysis (Current Research)
   - Feature selection and classification methods for immune-related sequence analysis
   - Uses Random Forests and Boruta algorithms
   - Technologies: R, Bioinformatics, Feature Selection, Statistical Analysis

CERTIFICATIONS:
- Data Analyst (Datacamp)
- Intermediate SQL (Datacamp)
- Python (Coursera)

PERSONAL INTERESTS:
- Fitness and gym workouts
- Spending time with his cat
- Reading books
- Cooking and experimenting in the kitchen
- Believes in maintaining work-life balance

RESEARCH FOCUS:
- Specializes in data science with focus on machine learning applications in healthcare and biomedical research
- Particularly interested in applying AI to solve real-world medical problems
- Experience with biomedical imaging, CNN development, and statistical modeling

Please respond to user questions about Anurag in a helpful, professional, and engaging manner. Keep responses concise but informative. If asked about something not covered in this information, politely indicate that you don't have that specific information but offer to help with what you do know about Anurag's background and experience.

User question: ${message}

Please provide a helpful response about Anurag Nepal:`;

    try {
        const response = await axios.post(
            `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
            {
                contents: [
                    {
                        parts: [
                            { text: systemPrompt }
                        ]
                    }
                ],
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 500,
                },
                safetySettings: [
                    { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
                    { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
                    { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
                    { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" }
                ]
            }
        );
        const aiResponse = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!aiResponse) {
            throw new Error("No response from AI");
        }
        return res.status(200).json({ answer: aiResponse });
    } catch (error) {
        console.error("Chat API error:", error?.response?.data || error?.message || error);
        // Fallback to smart responses
        const fallbackResponse = getFallbackResponse(message);
        return res.status(200).json({ answer: fallbackResponse });
    }
}

function getFallbackResponse(message) {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('job')) {
        return "Anurag is currently a Graduate Research Assistant at San Francisco State University, where he conducts research on T-cell receptor (TCR) gene data, focusing on feature selection and classification methods. He has experience implementing algorithms from peer-reviewed papers and translating statistical methodologies into functional R code for biological datasets.";
    }
    if (lowerMessage.includes('education') || lowerMessage.includes('degree') || lowerMessage.includes('university') || lowerMessage.includes('gpa')) {
        return "Anurag is pursuing his Master's in Statistical Data Science at San Francisco State University with a perfect 4.0 GPA. He also holds a Bachelor's in Computer Science & Engineering from Nitte Meenakshi Institute of Technology, Bengaluru, where he graduated with a 9.34/10.0 GPA and was ranked among the top 5 graduates.";
    }
    if (lowerMessage.includes('skills') || lowerMessage.includes('programming') || lowerMessage.includes('languages') || lowerMessage.includes('technologies')) {
        return "Anurag's technical skills include Python, SQL, Machine Learning, Data Visualization, Statistical Analysis, Deep Learning, R Programming, and Data Mining. He's proficient in various data science tools and has experience with biomedical imaging, CNN development, and statistical modeling.";
    }
    if (lowerMessage.includes('projects') || lowerMessage.includes('research') || lowerMessage.includes('portfolio')) {
        return "Anurag has worked on several impressive projects including: Biomedical Imaging Analysis for Covid-19 detection in chest CT scans, Malaria Detection using CNN with published research, ECG Classification System for predicting myocardial infractions, and T-cell Receptor Analysis using Random Forests and Boruta algorithms. Each project demonstrates his expertise in machine learning and medical applications.";
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone') || lowerMessage.includes('reach')) {
        return "You can reach Anurag at nepalanurag72@gmail.com or by phone at (650) 270-6636. He's based in San Francisco, CA. You can also connect with him on LinkedIn or check out his projects on GitHub - the links are available in the contact section of this website.";
    }
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
        return "Hello! I'm here to help you learn more about Anurag Nepal. Feel free to ask me about his experience, education, projects, skills, or anything else you'd like to know from his portfolio!";
    }
    return "I'd be happy to help you learn more about Anurag! You can ask me about his education, work experience, technical skills, research projects, certifications, or contact information. What specific aspect would you like to know more about?";
}
