async function checkCodeStatus(code) {
    try {
        const response = await fetch('/check-code', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ code })
        });

        const data = await response.json();

        if (!data.redeemed) {
            return code;
        }
    } catch (error) {
        console.error('Error checking code:', error);
    }
    return null;
}
