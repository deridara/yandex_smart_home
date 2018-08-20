document.addEventListener('DOMContentLoaded', () => {

            //   device list scroll

            const deviceScroll = document.querySelector('.device_slider');
            const deviceRadio1 = document.querySelector('#device_slider1');
            const deviceRadio2 = document.querySelector('#device_slider2');

            deviceRadio1.addEventListener('change', () => {
                scrollTo(deviceScroll, 0, 300);
            });

            deviceRadio2.addEventListener('change', () => {
                scrollTo(deviceScroll, 700, 300);
            })

            const scrollTo = (element, to, duration) => {
                let start = element.scrollLeft,
                    change = to - start,
                    currentTime = 0;
                increment = 20;
                step = change / (duration / increment);

                const animateScroll = function () {
                    currentTime += increment;
                    element.scrollLeft = element.scrollLeft + step;
                    if (currentTime < duration) {
                        setTimeout(animateScroll, increment);
                    }
                };
                animateScroll();
            };


            //   popup blocks

            const floorCard = document.getElementById('warm_floor');
            const ledCard = document.getElementById('led');
            const tempCard = document.getElementById('temp');
            const bg = document.getElementsByClassName('grid_wrapper')[0];
            const overflow = document.getElementsByClassName('overflow')[0];

            console.log(tempCard.getBoundingClientRect());

            tempCard.addEventListener('click', () => {
                darkenBg();
                showControllerById('temp_controller');
            });

            ledCard.addEventListener('click', () => {
                darkenBg();
                showControllerById('led_controller');
            });

            floorCard.addEventListener('click', () => {
                darkenBg();
                showControllerById('floor_controller');
            });

            overflow.addEventListener('click', () => {
                lightenBg();
                hideActiveController();
            });

            const darkenBg = () => {
                bg.classList.add('bg_blur');
                overflow.classList = 'overflow overflow_show';
            }

            const lightenBg = () => {
                bg.classList.value = 'grid_wrapper';
                overflow.classList = 'overflow overflow_hide';
            }

            const showControllerById = (id) => {
                const controller = document.getElementById(id);
                controller.classList.value = 'controller controller_show';

                const buttonOk = controller.querySelector('.controller_button_ok');
                const buttonClose = controller.querySelector('.controller_button_close');

                buttonOk.addEventListener('click', () => {
                    lightenBg();
                    hideActiveController();
                });

                buttonClose.addEventListener('click', () => {
                    lightenBg();
                    hideActiveController();
                })
            }

            const hideActiveController = () => {
                const controller = document.querySelector('.controller_show');
                controller.classList.value = 'controller controller_hide';
            }
}
