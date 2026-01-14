import { Injectable } from '@angular/core';
import { Question, LanguageCode } from '../types';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  
  constructor() {}

  // --- 纯本地模式 (无需API) ---

  async generateTest(language: LanguageCode): Promise<Question[]> {
    console.log(`NeuroMetric: Generating OFFLINE test for [${language}]`);
    
    // 模拟加载时间，让用户感觉像是在"生成"
    await new Promise(resolve => setTimeout(resolve, 1500));

    // 这里是本地题库，不需要联网，不需要Key
    // 你可以随意修改这里的题目
    const questions: Question[] = [
      { id: 1, category: 'logic', text: 'If All Zips are Zaps, and some Zaps are Zops, then:', options: ['Some Zips are Zops', 'No Zips are Zops', 'All Zops are Zips', 'Cannot be determined'], correctIndex: 3 },
      { id: 2, category: 'math', text: 'What is the next number: 2, 3, 5, 8, 12, ...', options: ['15', '16', '17', '18'], correctIndex: 2 },
      { id: 3, category: 'spatial', text: 'Which shape completes the pattern? [△] [▽] [△] ...', options: ['○', '▽', '△', '□'], correctIndex: 1 },
      { id: 4, category: 'verbal', text: 'Which word does NOT belong?', options: ['Apple', 'Banana', 'Carrot', 'Grape'], correctIndex: 2 },
      { id: 5, category: 'logic', text: 'A is older than B. C is younger than B. Who is the oldest?', options: ['A', 'B', 'C', 'Unknown'], correctIndex: 0 },
      { id: 6, category: 'math', text: '15% of 200 is:', options: ['20', '25', '30', '35'], correctIndex: 2 },
      { id: 7, category: 'spatial', text: 'If you fold a cube, how many faces does it have?', options: ['4', '6', '8', '12'], correctIndex: 1 },
      { id: 8, category: 'verbal', text: 'Ocean is to Water as Forest is to:', options: ['Leaf', 'Tree', 'Dark', 'Green'], correctIndex: 1 },
      { id: 9, category: 'logic', text: 'Which conclusion follows? No A are B. All C are A.', options: ['No C are B', 'Some C are B', 'All B are C', 'None'], correctIndex: 0 },
      { id: 10, category: 'math', text: 'Solve: 7 x 8 - 6', options: ['48', '50', '52', '56'], correctIndex: 1 },
    ];

    // 为了让每次看起来不一样，稍微打乱一下顺序
    return this.shuffleArray(questions).map((q, i) => ({...q, id: i + 1}));
  }

  async generateAnalysis(iq: number, language: LanguageCode, validity: string): Promise<string> {
    // 模拟分析生成
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return `[OFFLINE ANALYSIS] User demonstrates cognitive patterns consistent with an estimated IQ of ${iq}. Strengths observed in pattern recognition. Validity: ${validity}.`;
  }

  private shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}