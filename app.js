// Tool definitions and their UI
const tools = {
    'text-summarizer': {
        title: '文本摘要',
        render: () => `
            <div class="form-group">
                <label>输入需要摘要的文本：</label>
                <textarea class="tool-textarea" id="summarize-input" placeholder="粘贴你的长文本..."></textarea>
            </div>
            <button class="tool-btn" onclick="summarizeText()">生成摘要</button>
            <div class="result-box" id="summarize-result" style="display:none"></div>
        `
    },
    'translator': {
        title: '智能翻译',
        render: () => `
            <div class="form-group">
                <label>翻译方向：</label>
                <div class="form-row">
                    <select class="tool-select" id="translate-dir">
                        <option value="zh2en">中文 → 英文</option>
                        <option value="en2zh">英文 → 中文</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label>输入文本：</label>
                <textarea class="tool-textarea" id="translate-input" placeholder="输入要翻译的文本..."></textarea>
            </div>
            <button class="tool-btn" onclick="translateText()">翻译</button>
            <div class="result-box" id="translate-result" style="display:none"></div>
        `
    },

    'sentiment': {
        title: '情感分析',
        render: () => `
            <div class="form-group">
                <label>输入要分析的文本：</label>
                <textarea class="tool-textarea" id="sentiment-input" placeholder="输入一段文本来分析其情感倾向..."></textarea>
            </div>
            <button class="tool-btn" onclick="analyzeSentiment()">分析情感</button>
            <div id="sentiment-result" style="display:none">
                <div class="sentiment-bar-container">
                    <div class="sentiment-bar positive">
                        <span class="label">正面</span>
                        <div class="bar"><div class="bar-fill" id="pos-bar"></div></div>
                        <span class="value" id="pos-val">0%</span>
                    </div>
                    <div class="sentiment-bar neutral">
                        <span class="label">中性</span>
                        <div class="bar"><div class="bar-fill" id="neu-bar"></div></div>
                        <span class="value" id="neu-val">0%</span>
                    </div>
                    <div class="sentiment-bar negative">
                        <span class="label">负面</span>
                        <div class="bar"><div class="bar-fill" id="neg-bar"></div></div>
                        <span class="value" id="neg-val">0%</span>
                    </div>
                </div>
                <div class="result-box" id="sentiment-summary"></div>
            </div>
        `
    },

    'code-generator': {
        title: '代码生成',
        render: () => `
            <div class="form-group">
                <label>选择语言：</label>
                <select class="tool-select" id="code-lang">
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                </select>
            </div>
            <div class="form-group">
                <label>描述你想要的功能：</label>
                <textarea class="tool-textarea" id="code-input" placeholder="例如：一个冒泡排序函数"></textarea>
            </div>
            <button class="tool-btn" onclick="generateCode()">生成代码</button>
            <div class="result-box" id="code-result" style="display:none"></div>
        `
    },
    'json-formatter': {
        title: 'JSON格式化',
        render: () => `
            <div class="form-group">
                <label>输入JSON数据：</label>
                <textarea class="tool-textarea" id="json-input" placeholder='{"name":"test","age":25,"items":[1,2,3]}'></textarea>
            </div>
            <div class="form-row">
                <button class="tool-btn" onclick="formatJSON('beautify')">美化</button>
                <button class="tool-btn" onclick="formatJSON('minify')">压缩</button>
                <button class="tool-btn" onclick="formatJSON('validate')">验证</button>
            </div>
            <div class="result-box" id="json-result" style="display:none"></div>
        `
    },

    'password-gen': {
        title: '密码生成器',
        render: () => `
            <div class="form-group">
                <label>密码长度：</label>
                <input type="range" id="pwd-length" min="6" max="64" value="16" class="tool-input" 
                    style="padding:0" oninput="document.getElementById('pwd-len-val').textContent=this.value">
                <span id="pwd-len-val" style="margin-left:0.5rem">16</span>
            </div>
            <div class="form-group">
                <label>包含字符：</label>
                <div class="checkbox-group">
                    <label><input type="checkbox" id="pwd-upper" checked> 大写字母</label>
                    <label><input type="checkbox" id="pwd-lower" checked> 小写字母</label>
                    <label><input type="checkbox" id="pwd-numbers" checked> 数字</label>
                    <label><input type="checkbox" id="pwd-symbols" checked> 特殊符号</label>
                </div>
            </div>
            <button class="tool-btn" onclick="generatePassword()">生成密码</button>
            <div class="result-box" id="pwd-result" style="display:none"></div>
        `
    },
    'markdown-preview': {
        title: 'Markdown预览',
        render: () => `
            <div class="form-group">
                <label>输入Markdown文本：</label>
                <textarea class="tool-textarea" id="md-input" oninput="previewMarkdown()" 
                    placeholder="# 标题\n\n**粗体** *斜体*\n\n- 列表项1\n- 列表项2\n\n> 引用文本\n\n\`代码\`">
# Hello World

**这是粗体** *这是斜体*

- 列表项 1
- 列表项 2
- 列表项 3

> 这是一段引用

\`inline code\` 示例

```
代码块示例
console.log('Hello!');
```</textarea>
            </div>
            <label style="color:#b0b0b0;font-size:0.9rem">预览：</label>
            <div class="markdown-preview" id="md-preview"></div>
        `
    },

    'color-picker': {
        title: '颜色工具',
        render: () => `
            <div class="form-group">
                <label>选择颜色：</label>
                <input type="color" id="color-input" value="#667eea" class="tool-input" 
                    style="height:50px;padding:5px;cursor:pointer" oninput="updateColor()">
            </div>
            <div class="color-preview" id="color-preview" style="background:#667eea"></div>
            <div class="color-values" id="color-values">
                <span>HEX: #667eea</span>
                <span>RGB: rgb(102, 126, 234)</span>
                <span>HSL: hsl(229, 76%, 66%)</span>
                <span>RGBA: rgba(102, 126, 234, 1)</span>
            </div>
            <div class="form-group" style="margin-top:1rem">
                <label>或输入颜色值：</label>
                <input type="text" class="tool-input" id="color-text-input" 
                    placeholder="#667eea 或 rgb(102,126,234)" onchange="parseColorInput()">
            </div>
        `
    },
    'word-counter': {
        title: '字数统计',
        render: () => `
            <div class="form-group">
                <label>输入文本：</label>
                <textarea class="tool-textarea" id="wc-input" oninput="countWords()" 
                    placeholder="输入或粘贴文本来统计..."></textarea>
            </div>
            <div class="stats-grid" id="wc-stats">
                <div class="stat-item">
                    <span class="stat-number" id="wc-chars">0</span>
                    <span class="stat-label">字符数</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number" id="wc-chars-no-space">0</span>
                    <span class="stat-label">字符(无空格)</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number" id="wc-words">0</span>
                    <span class="stat-label">词/字数</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number" id="wc-lines">0</span>
                    <span class="stat-label">行数</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number" id="wc-sentences">0</span>
                    <span class="stat-label">句子数</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number" id="wc-reading">0分钟</span>
                    <span class="stat-label">阅读时间</span>
                </div>
            </div>
        `
    }
};


// Modal control
function showTool(toolId) {
    const tool = tools[toolId];
    if (!tool) return;
    document.getElementById('modal-title').textContent = tool.title;
    document.getElementById('modal-body').innerHTML = tool.render();
    document.getElementById('modal-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
    // Auto-trigger for markdown preview
    if (toolId === 'markdown-preview') {
        setTimeout(previewMarkdown, 100);
    }
}

function closeTool() {
    document.getElementById('modal-overlay').classList.remove('active');
    document.body.style.overflow = '';
}

// ESC to close
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeTool();
});

// --- Tool Functions ---

// Text Summarizer (simple extractive)
function summarizeText() {
    const text = document.getElementById('summarize-input').value.trim();
    if (!text) return alert('请输入文本');
    const sentences = text.match(/[^。！？.!?\n]+[。！？.!?\n]?/g) || [text];
    const wordCount = text.length;
    let summary = '';
    if (sentences.length <= 3) {
        summary = text;
    } else {
        // Score sentences by position and length
        const scored = sentences.map((s, i) => ({
            text: s.trim(),
            score: (i === 0 ? 3 : 1) + (s.length > 20 ? 1 : 0) + (i === sentences.length - 1 ? 2 : 0)
        }));
        scored.sort((a, b) => b.score - a.score);
        const topN = Math.min(3, Math.ceil(sentences.length * 0.3));
        const selected = scored.slice(0, topN).map(s => s.text);
        summary = selected.join(' ');
    }
    const result = document.getElementById('summarize-result');
    result.style.display = 'block';
    result.innerHTML = `<strong>摘要结果：</strong>\n\n${summary}\n\n<em style="color:#667eea">原文 ${wordCount} 字 → 摘要 ${summary.length} 字 (压缩率: ${Math.round((1 - summary.length/wordCount)*100)}%)</em>`;
}


// Translator (simple dictionary + rule based demo)
function translateText() {
    const text = document.getElementById('translate-input').value.trim();
    const dir = document.getElementById('translate-dir').value;
    if (!text) return alert('请输入文本');

    let result = '';
    if (dir === 'zh2en') {
        // Simple Chinese to English simulation
        const dict = {
            '你好': 'Hello', '世界': 'World', '谢谢': 'Thank you',
            '早上好': 'Good morning', '晚上好': 'Good evening',
            '我': 'I', '你': 'you', '他': 'he', '她': 'she',
            '是': 'is', '的': "'s", '很': 'very', '好': 'good',
            '大': 'big', '小': 'small', '人工智能': 'Artificial Intelligence',
            '机器学习': 'Machine Learning', '深度学习': 'Deep Learning',
            '计算机': 'Computer', '程序': 'Program', '算法': 'Algorithm',
            '数据': 'Data', '网络': 'Network', '今天': 'Today',
            '明天': 'Tomorrow', '学习': 'Study', '工作': 'Work',
            '喜欢': 'like', '不': 'not', '这个': 'this', '那个': 'that'
        };
        result = text;
        for (const [zh, en] of Object.entries(dict)) {
            result = result.replace(new RegExp(zh, 'g'), en + ' ');
        }
        result = `[翻译结果]\n${result.trim()}\n\n(注：这是简化的本地翻译演示，完整翻译需要接入AI API)`;
    } else {
        // English to Chinese
        const dict = {
            'hello': '你好', 'world': '世界', 'thank you': '谢谢',
            'good morning': '早上好', 'good evening': '晚上好',
            'artificial intelligence': '人工智能', 'machine learning': '机器学习',
            'deep learning': '深度学习', 'computer': '计算机',
            'program': '程序', 'algorithm': '算法', 'data': '数据',
            'network': '网络', 'today': '今天', 'tomorrow': '明天',
            'study': '学习', 'work': '工作', 'like': '喜欢',
            'this': '这个', 'that': '那个', 'big': '大', 'small': '小',
            'good': '好', 'bad': '坏', 'love': '爱', 'happy': '快乐'
        };
        result = text.toLowerCase();
        for (const [en, zh] of Object.entries(dict)) {
            result = result.replace(new RegExp('\\b' + en + '\\b', 'gi'), zh);
        }
        result = `[翻译结果]\n${result}\n\n(注：这是简化的本地翻译演示，完整翻译需要接入AI API)`;
    }
    const el = document.getElementById('translate-result');
    el.style.display = 'block';
    el.textContent = result;
}


// Sentiment Analysis
function analyzeSentiment() {
    const text = document.getElementById('sentiment-input').value.trim();
    if (!text) return alert('请输入文本');

    // Simple keyword-based sentiment analysis
    const posWords = ['好', '棒', '优秀', '喜欢', '爱', '开心', '快乐', '幸福', '满意', '感谢',
        'good', 'great', 'excellent', 'love', 'happy', 'wonderful', 'amazing', 'perfect',
        '不错', '赞', '厉害', '漂亮', '美丽', '成功', 'awesome', 'fantastic', 'nice', 'best'];
    const negWords = ['差', '糟糕', '讨厌', '坏', '难过', '失望', '愤怒', '生气', '恶心', '垃圾',
        'bad', 'terrible', 'hate', 'awful', 'angry', 'sad', 'ugly', 'worst', 'poor',
        '无聊', '烦', '累', '失败', '难受', 'horrible', 'disgusting', 'boring', 'annoying'];

    let posScore = 0, negScore = 0;
    const lowerText = text.toLowerCase();
    posWords.forEach(w => { if (lowerText.includes(w)) posScore += 1; });
    negWords.forEach(w => { if (lowerText.includes(w)) negScore += 1; });

    const total = posScore + negScore + 1;
    let pos = Math.round((posScore / total) * 100);
    let neg = Math.round((negScore / total) * 100);
    let neu = 100 - pos - neg;

    if (posScore === 0 && negScore === 0) { pos = 10; neg = 10; neu = 80; }

    document.getElementById('sentiment-result').style.display = 'block';
    document.getElementById('pos-bar').style.width = pos + '%';
    document.getElementById('pos-val').textContent = pos + '%';
    document.getElementById('neu-bar').style.width = neu + '%';
    document.getElementById('neu-val').textContent = neu + '%';
    document.getElementById('neg-bar').style.width = neg + '%';
    document.getElementById('neg-val').textContent = neg + '%';

    let verdict = '中性';
    if (pos > neg + 20) verdict = '正面积极';
    else if (neg > pos + 20) verdict = '负面消极';
    else if (pos > neg) verdict = '偏正面';
    else if (neg > pos) verdict = '偏负面';

    document.getElementById('sentiment-summary').innerHTML = 
        `<strong>分析结论：</strong>整体情感倾向为 <span style="color:#667eea">${verdict}</span>\n\n检测到正面关键词: ${posScore}个, 负面关键词: ${negScore}个\n\n(注：本工具使用关键词匹配方式进行基础情感分析)`;
}


// Code Generator
function generateCode() {
    const lang = document.getElementById('code-lang').value;
    const desc = document.getElementById('code-input').value.trim();
    if (!desc) return alert('请描述你想要的功能');

    const templates = {
        javascript: {
            '排序': `// 冒泡排序\nfunction bubbleSort(arr) {\n    const n = arr.length;\n    for (let i = 0; i < n - 1; i++) {\n        for (let j = 0; j < n - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];\n            }\n        }\n    }\n    return arr;\n}\n\n// 使用示例\nconsole.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));`,
            '请求': `// Fetch API 请求\nasync function fetchData(url) {\n    try {\n        const response = await fetch(url);\n        if (!response.ok) throw new Error(\`HTTP \${response.status}\`);\n        const data = await response.json();\n        return data;\n    } catch (error) {\n        console.error('请求失败:', error);\n        throw error;\n    }\n}\n\n// 使用示例\nfetchData('https://api.example.com/data')\n    .then(data => console.log(data));`,
            'default': `// ${desc}\nfunction myFunction(params) {\n    // TODO: 实现 "${desc}" 功能\n    console.log('执行:', params);\n    return result;\n}\n\n// 使用示例\nconst result = myFunction('input');\nconsole.log(result);`
        },
        python: {
            '排序': `# 冒泡排序\ndef bubble_sort(arr):\n    n = len(arr)\n    for i in range(n - 1):\n        for j in range(n - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n    return arr\n\n# 使用示例\nprint(bubble_sort([64, 34, 25, 12, 22, 11, 90]))`,
            '请求': `# HTTP 请求\nimport requests\n\ndef fetch_data(url):\n    try:\n        response = requests.get(url)\n        response.raise_for_status()\n        return response.json()\n    except requests.exceptions.RequestException as e:\n        print(f"请求失败: {e}")\n        raise\n\n# 使用示例\ndata = fetch_data('https://api.example.com/data')\nprint(data)`,
            'default': `# ${desc}\ndef my_function(params):\n    """${desc}"""\n    # TODO: 实现功能\n    result = None\n    return result\n\n# 使用示例\nresult = my_function('input')\nprint(result)`
        },
        html: {
            'default': `<!-- ${desc} -->\n<!DOCTYPE html>\n<html lang="zh-CN">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>${desc}</title>\n    <style>\n        body { font-family: Arial, sans-serif; margin: 2rem; }\n        .container { max-width: 800px; margin: 0 auto; }\n    </style>\n</head>\n<body>\n    <div class="container">\n        <h1>${desc}</h1>\n        <p>内容区域</p>\n    </div>\n</body>\n</html>`
        },
        css: {
            'default': `/* ${desc} */\n.container {\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 1rem;\n}\n\n.card {\n    background: #fff;\n    border-radius: 8px;\n    box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n    padding: 1.5rem;\n    margin-bottom: 1rem;\n    transition: transform 0.2s;\n}\n\n.card:hover {\n    transform: translateY(-2px);\n}`
        }
    };

    const langTemplates = templates[lang] || templates.javascript;
    let code = langTemplates['default'];
    for (const [key, tpl] of Object.entries(langTemplates)) {
        if (key !== 'default' && desc.includes(key)) {
            code = tpl; break;
        }
    }

    const el = document.getElementById('code-result');
    el.style.display = 'block';
    el.textContent = code;
}


// JSON Formatter
function formatJSON(action) {
    const input = document.getElementById('json-input').value.trim();
    if (!input) return alert('请输入JSON数据');
    const el = document.getElementById('json-result');
    el.style.display = 'block';

    try {
        const parsed = JSON.parse(input);
        if (action === 'beautify') {
            el.textContent = JSON.stringify(parsed, null, 2);
        } else if (action === 'minify') {
            el.textContent = JSON.stringify(parsed);
        } else {
            el.innerHTML = '<span style="color:#4ecdc4">&#10004; JSON 格式合法!</span>\n\n' +
                `类型: ${Array.isArray(parsed) ? '数组' : '对象'}\n` +
                `顶层键数: ${Object.keys(parsed).length}\n` +
                `字符数: ${input.length}`;
        }
    } catch (e) {
        el.innerHTML = `<span style="color:#e74c3c">&#10008; JSON 格式错误!</span>\n\n${e.message}`;
    }
}

// Password Generator
function generatePassword() {
    const length = parseInt(document.getElementById('pwd-length').value);
    const useUpper = document.getElementById('pwd-upper').checked;
    const useLower = document.getElementById('pwd-lower').checked;
    const useNumbers = document.getElementById('pwd-numbers').checked;
    const useSymbols = document.getElementById('pwd-symbols').checked;

    let charset = '';
    if (useUpper) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useLower) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (useNumbers) charset += '0123456789';
    if (useSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (!charset) return alert('请至少选择一种字符类型');

    let password = '';
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);
    for (let i = 0; i < length; i++) {
        password += charset[array[i] % charset.length];
    }

    // Calculate strength
    let strength = 0;
    if (length >= 12) strength++;
    if (length >= 16) strength++;
    if (useUpper && useLower) strength++;
    if (useNumbers) strength++;
    if (useSymbols) strength++;

    const strengthLabels = ['很弱', '弱', '一般', '强', '很强'];
    const strengthColors = ['#e74c3c', '#f39c12', '#f1c40f', '#27ae60', '#2ecc71'];
    const si = Math.min(strength, 4);

    const el = document.getElementById('pwd-result');
    el.style.display = 'block';
    el.innerHTML = `<strong>生成的密码：</strong>\n\n<span style="font-family:monospace;font-size:1.2rem;letter-spacing:1px">${password}</span>\n\n密码强度: <span style="color:${strengthColors[si]}">${strengthLabels[si]}</span>\n字符集大小: ${charset.length}\n可能组合: ${charset.length}^${length} = ${Math.pow(charset.length, Math.min(length, 10)).toExponential(2)}+`;
}


// Markdown Preview
function previewMarkdown() {
    const input = document.getElementById('md-input');
    if (!input) return;
    const text = input.value;
    let html = text
        // Code blocks
        .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
        // Inline code
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        // Headers
        .replace(/^### (.+)$/gm, '<h3>$1</h3>')
        .replace(/^## (.+)$/gm, '<h2>$1</h2>')
        .replace(/^# (.+)$/gm, '<h1>$1</h1>')
        // Bold & italic
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        // Links
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>')
        // Blockquotes
        .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
        // Unordered lists
        .replace(/^- (.+)$/gm, '<li>$1</li>')
        // Line breaks
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');

    // Wrap lists
    html = html.replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>');
    html = '<p>' + html + '</p>';

    document.getElementById('md-preview').innerHTML = html;
}

// Color Picker
function updateColor() {
    const color = document.getElementById('color-input').value;
    document.getElementById('color-preview').style.background = color;

    const r = parseInt(color.substr(1, 2), 16);
    const g = parseInt(color.substr(3, 2), 16);
    const b = parseInt(color.substr(5, 2), 16);

    // Convert to HSL
    const rn = r / 255, gn = g / 255, bn = b / 255;
    const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case rn: h = ((gn - bn) / d + (gn < bn ? 6 : 0)) / 6; break;
            case gn: h = ((bn - rn) / d + 2) / 6; break;
            case bn: h = ((rn - gn) / d + 4) / 6; break;
        }
    }

    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    document.getElementById('color-values').innerHTML = `
        <span>HEX: ${color}</span>
        <span>RGB: rgb(${r}, ${g}, ${b})</span>
        <span>HSL: hsl(${h}, ${s}%, ${l}%)</span>
        <span>RGBA: rgba(${r}, ${g}, ${b}, 1)</span>
    `;
}

function parseColorInput() {
    const input = document.getElementById('color-text-input').value.trim();
    const colorInput = document.getElementById('color-input');
    // Try to parse hex
    if (input.match(/^#[0-9a-fA-F]{6}$/)) {
        colorInput.value = input;
        updateColor();
    }
}


// Word Counter
function countWords() {
    const text = document.getElementById('wc-input').value;
    const chars = text.length;
    const charsNoSpace = text.replace(/\s/g, '').length;

    // Count Chinese chars + English words
    const chinese = (text.match(/[\u4e00-\u9fa5]/g) || []).length;
    const englishWords = (text.match(/[a-zA-Z]+/g) || []).length;
    const words = chinese + englishWords;

    const lines = text ? text.split('\n').length : 0;
    const sentences = (text.match(/[。！？.!?]+/g) || []).length || (text.length > 0 ? 1 : 0);

    // Reading speed: ~300 Chinese chars/min or ~200 English words/min
    const readingMinutes = Math.max(1, Math.ceil(words / 300));

    document.getElementById('wc-chars').textContent = chars;
    document.getElementById('wc-chars-no-space').textContent = charsNoSpace;
    document.getElementById('wc-words').textContent = words;
    document.getElementById('wc-lines').textContent = lines;
    document.getElementById('wc-sentences').textContent = sentences;
    document.getElementById('wc-reading').textContent = chars === 0 ? '0分钟' : readingMinutes + '分钟';
}
