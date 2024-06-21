
async function sendPhotoAndText() {
    const photoUrl = document.getElementById('photoUrl').value;
    const messageText = document.getElementById('messageText').value;
    const statusMessage = document.getElementById('statusMessage');

    if (!photoUrl) {
        statusMessage.textContent = 'Please enter a photo URL.';
        return;
    }

    const chatId = -1002043719567;  

    const url = `https://api.telegram.org/bot7207231079:AAFR21ydwp2ekBoB3ZTgIuQcPFQiCT9DD7U/sendPhoto`;

    const data = {
        chat_id: chatId,
        photo: photoUrl,
        caption: messageText.trim() ? messageText : ' '
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        console.log(result);
        if (result.ok) {
            statusMessage.textContent = 'Photo and text sent successfully!';
        } else {
            statusMessage.textContent = `Error: ${result.description}`;
        }
    } catch (error) {
        statusMessage.textContent = `Error: ${error.message}`;
    }
}
