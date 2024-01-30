function getLearningMethod() {
    var learningStyle = document.getElementById('learning-style').value;
    var resultElement = document.getElementById('result');

    var learningMethods = {
        visual: 'Metode belajar visual seperti menggunakan diagram, grafik, dan gambar dapat membantu pemahaman Anda.',
        auditory: 'Metode belajar auditori cocok untuk Anda. Dengarkan kuliah, rekaman, atau diskusi untuk memahami materi.',
        kinesthetic: 'Anda lebih suka belajar secara kinestetik. Cobalah melibatkan tangan Anda, berpartisipasi dalam praktik langsung, atau membuat catatan sambil bergerak.'
    };

    var result = learningMethods[learningStyle];

    resultElement.textContent = result;
}
