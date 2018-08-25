(function initializeSignatureOptions(global) {

    const previewElement = document.getElementById('preview');
    const previewDefaultText = 'Signature Preview';
    previewElement.innerText = previewDefaultText;

    /**=====================================
     * Font Family Definition.
     ======================================*/

    const fontFamilyOptions = [
        "Indie Flower",
        "Dancing Script",
        "Great Vibes",
        "Tangerine",
    ];

    const fontFamilySelectElement = document.getElementById('fontFamily');

    fontFamilyOptions.forEach(option => {
        fontFamilySelectElement.innerHTML += `<option value="${option}">${option}</option>`;
    });

    fontFamilySelectElement.addEventListener('change', event => {
        const selectedOptionValue = event.target.value;

        previewElement.style.setProperty('--font-family', selectedOptionValue);
    });


    /**=====================================
     * Font Size Definition.
     ======================================*/
    const fontSizeElement = document.getElementById('fontSize');

    fontSizeElement.addEventListener('input', event => {
        const selectedFontSizeValue = `${event.target.value}px`;

        previewElement.style.setProperty('--font-size', selectedFontSizeValue);
    });

     /**=====================================
     * Font Color Definition.
     ======================================*/
    const fontColorElement = document.getElementById('fontColor');

    fontColorElement.addEventListener('input', event => {
        const selectedColorValue = event.target.value;

        previewElement.style.setProperty('--font-color', selectedColorValue);
    });

    /**=====================================
     * Signature text Definition.
     ======================================*/
    const signatureTextElement = document.getElementById('signature');

    signatureTextElement.addEventListener('input', event => {
        const signatureValue = event.target.value;

        if (signatureValue.length > 50) {
            return;
        }

        previewElement.innerText = signatureValue || previewDefaultText;
    });

    /**=====================================
     * Background Color Definition.
     ======================================*/
    const signatureBackgroundColorElement = document.getElementById('backgroundColor');

    signatureBackgroundColorElement.addEventListener('input', event => {
        const signatureBackgroundValue = event.target.value;

        previewElement.style.setProperty('--background-color', signatureBackgroundValue);
    });

    /**=====================================
     * Generate image and download.
     ======================================*/
    const downloadButtonElement = document.getElementById('download');

    downloadButtonElement.addEventListener('click', event => {
        Signature(null, {
            text: previewElement.innerText,
            textColor: fontColorElement.value,
            backgroundColor: signatureBackgroundColorElement.value,
            fontSize: fontSizeElement.value,
            fontFamily: fontFamilySelectElement.value,
        }).render().downloadAs('png');
    });

}(window));
