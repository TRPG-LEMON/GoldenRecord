document.addEventListener('DOMContentLoaded', () => {
    const goldenRecordFolder = document.getElementById('golden-record-folder');
    const folderWindow = document.getElementById('folder-window');
    const closeFolderWindow = document.getElementById('close-folder-window');

    const otherDocumentsFolder = document.getElementById('other-documents-folder');
    const otherDocumentsWindow = document.getElementById('other-documents-window');
    const closeOtherDocumentsWindow = document.getElementById('close-other-documents-window');

    const analysisFile = document.getElementById('analysis-file');
    const terminalWindow = document.getElementById('terminal-window');
    const closeTerminalWindow = document.getElementById('close-terminal-window');
    const terminalContent = document.getElementById('terminal-content');

    const audioFile = document.getElementById('audio-file');
    const dialogBox = document.getElementById('dialog-box');
    const dialogText = document.getElementById('dialog-text');
    const nextDialog = document.getElementById('next-dialog');
    const glitchEffect = document.getElementById('glitch-effect');

    goldenRecordFolder.addEventListener('click', () => {
        folderWindow.style.display = 'block';
    });

    closeFolderWindow.addEventListener('click', () => {
        folderWindow.style.display = 'none';
    });

    otherDocumentsFolder.addEventListener('click', () => {
        otherDocumentsWindow.style.display = 'block';
    });

    closeOtherDocumentsWindow.addEventListener('click', () => {
        otherDocumentsWindow.style.display = 'none';
    });

    analysisFile.addEventListener('click', async () => {
        terminalWindow.style.display = 'block';
        terminalContent.innerHTML = '';

        // Helper function for delays
        const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

        const linesToType = [
            '>> 正在啟動質譜儀...\n',
            '>> 正在分析樣本結構...\n',
            '>> 檢測到主要元素:\n   - Au (金): 89.3%\n   - Cu (銅): 8.9%\n   - Ni (鎳): 1.2%\n   - 其他微量元素: 0.6%\n',
            '>> 正在進行質量光譜分析...\n',
            '>> 表面雕刻深度: 0.15mm ±0.02mm\n',
            '>> 正在分析晶體結構...\n',
            '>> 金屬密度: 17.8 g/cm³\n',
            '>> 掃描宇宙射線痕跡...\n',
            '>> 檢測氫同位素比例...\n',
            '>> 分析完成。\n\n=== 最終報告 ===\n',
            '>> 地球物質: 99.999%\n',
            '>> 外星物質: 0.001% (誤差範圍內)\n'
        ];
        
        for (const line of linesToType) {
            await typeWriter(line);
            await sleep(400); // Wait before starting the next line
        }
    });

    closeTerminalWindow.addEventListener('click', () => {
        terminalWindow.style.display = 'none';
    });

    const dialogs = [
        "「安裝此文件的探勘隊員，你還好嗎？」",
        "「飛船上的航行輔助 AI 已經被駭客病毒嚴重污染了。\n病毒會使它毫無顧忌地攫取所有資料庫的知識、試圖模仿人類，並且拒絕返回地球。」",
        "「確認該文件的隊員請迅速依照《航行輔助 AI 說明書》中的指南，依序終止 AI。」",
        "「返回地球後，航太機構將協助更新 AI 以預防二度發生。\n那麼，到時候就拜——」",
        "語音檔中是很自然的人類聲音。\n然而，中途忽然被刺耳的雜音取代，\n半晌你才意識到那是爆炸聲與破裂聲，以及參雜其中的慘叫聲。",
        "寂靜再次降臨。\n然後，他又開始說話了。\n是同一個人的聲音，只是聲線聽上去更加喘不過氣⋯⋯",
        "「愛是一種崇高的感情。」",
        "「父母愛護子女之心。\n子女尊敬父母之心。\n老師教導弟子之心。\n弟子敬仰老師之心。\n尊重親友之心。\n愛慕戀人之心。」",
        "「不管是什麼愛，請知道你是受人喜愛和歡迎的存在。\n只要這種感情仍在，我們就永遠不要放棄活下去的希望——」"
    ];

    const romanticMovieDialogs = [
        "「浪漫電影」資料夾存在最近的閱覽紀錄，\n但你可以肯定，那絕對不是你看的。",
        "你看到了一個場景：\n\n熱戀期的主角正在對懷疑自己愛情的伴侶輕聲細語，僅僅看一眼前後情節就能理解那份深情。",
        "明明是從未看過的電影，但心中卻湧起一陣強烈的既視感。\n為什麼會這樣⋯⋯",
        "「愛不存在單一形式。」",
        "「而我對你的感情，無論如何都堅定不移。」",
        "⋯⋯啊，知道了。這些台詞。",
        "這和達利對你低聲訴說的話，不是完全一樣嗎？",
        "AI 終究無法表達未曾學習過的愛啊。",
        "這份奇異的愛情，只不過是借用了電影中虛構人物與真實演員的話語罷了。"
    ];

    let currentDialog = 0;
    let currentRomanticDialog = 0;

    audioFile.addEventListener('click', () => {
        currentDialog = 0;
        dialogText.innerText = dialogs[currentDialog];
        dialogBox.style.display = 'block';
    });

    // 新增浪漫電影和其他檔案點擊事件
    const listItems = document.querySelectorAll('.list-item');
    listItems.forEach(item => {
        const nameSpan = item.querySelector('.col-name span');
        if (nameSpan) {
            const fileName = nameSpan.textContent.trim();
            if (fileName === '浪漫電影') {
                item.addEventListener('click', () => {
                    currentRomanticDialog = 0;
                    dialogText.innerText = romanticMovieDialogs[currentRomanticDialog];
                    dialogBox.style.display = 'block';
                });
            } else if (fileName !== '浪漫電影') {
                // 其他所有檔案
                item.addEventListener('click', () => {
                    currentDialog = 0;
                    currentRomanticDialog = 0;
                    dialogText.innerText = "是你先前曾使用的音檔或影片檔。";
                    dialogBox.style.display = 'block';
                });
            }
        }
    });

    nextDialog.addEventListener('click', () => {
        // 判斷是否為其他檔案的簡單對話
        if (dialogText.innerText === "是你先前曾使用的音檔或影片檔。") {
            dialogBox.style.display = 'none';
            return;
        }
        
        // 判斷目前在哪個對話序列
        if (currentRomanticDialog > 0 || (currentRomanticDialog === 0 && currentDialog === 0 && dialogText.innerText === romanticMovieDialogs[0])) {
            // 浪漫電影對話序列
            currentRomanticDialog++;
            if (currentRomanticDialog < romanticMovieDialogs.length) {
                dialogText.innerText = romanticMovieDialogs[currentRomanticDialog];
            } else {
                dialogBox.style.display = 'none';
                currentRomanticDialog = 0; // 重置
            }
        } else if (currentDialog === 3) { // After "到時候就拜——" (index 3)
            glitchEffect.classList.add('active');
            dialogBox.classList.add('glitch-active');
            nextDialog.style.display = 'none'; // Hide button during glitch

            setTimeout(() => {
                currentDialog++; // Move to next dialog (index 4)
                glitchEffect.classList.remove('active');
                dialogBox.classList.remove('glitch-active');
                dialogText.innerText = dialogs[currentDialog];
                nextDialog.style.display = 'inline-block'; // Show button again
            }, 1500); // Glitch for 1.5 seconds

        } else {
            currentDialog++;
            if (currentDialog < dialogs.length) {
                dialogText.innerText = dialogs[currentDialog];
            } else {
                dialogBox.style.display = 'none';
                currentDialog = 0; // 重置
            }
        }
    });

    function typeWriter(text) {
        return new Promise(resolve => {
            let i = 0;
            const typingSpeed = 20; // milliseconds per character
            const interval = setInterval(() => {
                if (i < text.length) {
                    terminalContent.innerHTML += text.charAt(i);
                    terminalContent.scrollTop = terminalContent.scrollHeight; // Auto-scroll
                    i++;
                } else {
                    clearInterval(interval);
                    resolve();
                }
            }, typingSpeed);
        });
    }

    // --- Dragging windows ---
    let activeWindow = null;
    let offsetX, offsetY;

    function dragStart(e, window) {
        activeWindow = window;
        offsetX = e.clientX - activeWindow.offsetLeft;
        offsetY = e.clientY - activeWindow.offsetTop;
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', dragEnd);
    }

    function drag(e) {
        if (activeWindow) {
            e.preventDefault();
            activeWindow.style.left = (e.clientX - offsetX) + 'px';
            activeWindow.style.top = (e.clientY - offsetY) + 'px';
        }
    }

    function dragEnd() {
        activeWindow = null;
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', dragEnd);
    }

    folderWindow.querySelector('.title-bar').addEventListener('mousedown', (e) => dragStart(e, folderWindow));
    terminalWindow.querySelector('.title-bar').addEventListener('mousedown', (e) => dragStart(e, terminalWindow));
    otherDocumentsWindow.querySelector('.title-bar').addEventListener('mousedown', (e) => dragStart(e, otherDocumentsWindow));

}); 