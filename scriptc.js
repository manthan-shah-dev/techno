        document.addEventListener('DOMContentLoaded', () => {
            const titleElement = document.getElementById('technocrat-title');
            const cursorElement = document.getElementById('cursor');
            const fullText = "Technocrat";
            const speed = 70; 
            let i = 0;

            function typeWriter() {
                if (i < fullText.length) {
                    titleElement.textContent = fullText.substring(0, i + 1);
                    i++;
                    setTimeout(typeWriter, speed);
                } else {
                    // Set the final state and ensure the cursor is next to it
                    titleElement.textContent = fullText + " ";
                    cursorElement.style.visibility = 'visible';
                }
            }

            // Start typing effect
            titleElement.textContent = '';
            cursorElement.style.visibility = 'hidden';
            setTimeout(typeWriter, 500);

            // Initialize Lucide Icons
            lucide.createIcons();
        });
