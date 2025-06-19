const imageInput1 = document.querySelector('#input__file1');
const imagePreview1 = document.querySelector('.file1');

const imageInput2 = document.querySelector('#input__file2');
const imagePreview2 = document.querySelector('.file2');

const imageInput3 = document.querySelector('#input__file3');
const imagePreview3 = document.querySelector('.file3');

imageInput1.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview1.src = e.target.result;
            imagePreview1.style.display = 'block';
        }
        reader.readAsDataURL(file);
    } 
    else {
        imagePreview1.style.display = 'none';
    }
});

imageInput2.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview2.src = e.target.result;
            imagePreview2.style.display = 'block';
        }
        reader.readAsDataURL(file);
    } 
    else {
        imagePreview2.style.display = 'none';
    }
});

imageInput3.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview3.src = e.target.result;
            imagePreview3.style.display = 'block';
        }
        reader.readAsDataURL(file);
    } 
    else {
        imagePreview3.style.display = 'none';
    }
});