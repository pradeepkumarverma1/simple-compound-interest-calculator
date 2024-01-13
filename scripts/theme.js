let borders = document.querySelectorAll('.theme-border');
let backgrounds = document.querySelectorAll('.theme-bg');
let themeColors = document.querySelectorAll('.theme-color');

themeColors.forEach(themeColor => {

    themeColor.addEventListener('click', () => {

        const color = themeColor.dataset.color;

        backgrounds.forEach(bg => {

            bg.classList.forEach(existingClassList => {

                if (existingClassList.endsWith('-500')) {
                    bg.classList.remove(existingClassList);
                }

            })

            bg.classList.add('bg-' + color);
        })

        borders.forEach(border => {

            border.classList.forEach(existingClassList => {

                if (existingClassList.endsWith('-500')) {
                    border.classList.remove(existingClassList);
                }

            })

            border.classList.add('border-2');
            border.classList.add('border-' + color);
        })

    })
})