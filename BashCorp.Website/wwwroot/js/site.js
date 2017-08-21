const resize = () => {
                const width = window.innerWidth;
                const elements = document.getElementsByClassName('pane');
                Array.from(elements).forEach(i => {
                    const left = Math.floor((width - i.clientWidth) / 2)
                    i.style.left = left + "px"
                });
                
                const footer = document.getElementsByClassName('footer')[0];
                const bottomBanner = document.getElementsByClassName('bottom')[0];
                const header = document.getElementsByClassName('heading')[0];
                const glass = document.getElementsByClassName('glass')[0];
                const view = document.getElementsByClassName('view')[0];
                const height = document.getElementsByClassName('content')[0].clientHeight;
                const glassHeight = view.clientHeight - header.clientHeight;
                glass.style['min-height'] = `${glassHeight}px`
                glass.style.height = `${height}px`;
                view.style.height = `${height + header.clientHeight}px`;
                footer.style.top = bottomBanner.style.top = `${height + header.clientHeight - 50}px`;
                const hideWhileLoading = document.getElementsByClassName('hideWhileLoading');
                Array.from(hideWhileLoading).forEach(x => {
                    x.style.visibility = "visible";
                });
            };

            const resizeGallery = ()=> {
                const slides = document.getElementsByClassName('slide');
                const carouselFrame = document.getElementById('frame');
                const topLeft = Math.floor(carouselFrame.clientLeft + (carouselFrame.clientWidth * 0.187));
                const top = Math.floor(carouselFrame.clientTop + (carouselFrame.clientHeight * 0.154));
                const screenWidth = Math.floor(carouselFrame.clientWidth * 0.63);

                Array.from(slides).forEach(s => {

                    const screen = s.getElementsByClassName('screen')[0];
                    screen.style.left = `${topLeft}px`;
                    screen.style.top = `${top}px`;
                    screen.style.width = `${screenWidth}px`;
                    screen.style.display = "block";
                });
            }

            const adjustElementHeight = (element, newHeight, initialHeight) => {
                if (element.clientHeight >= initialHeight)
                    return;

                element.style.height =  `${element.clientHeight + newHeight}px`;
                setTimeout(()=> {
                    adjustElementHeight(element, newHeight, initialHeight);
                }, 10);
            };

            const slideDownElement = (element, initialHeight) => {
                element.style.height = '0px';       
                const factor = Math.floor(initialHeight / 5);
                adjustElementHeight(element, factor, initialHeight);
            };

            const setMenu = ()=> {
                const triggers = document.getElementsByClassName('submenutrigger');
                Array.from(triggers).forEach(t => {
                    const menus = t.parentElement.getElementsByClassName('submenu');
                    t.onclick = () => {
                        Array.from(menus).forEach(m => {
                            if (m.classList.contains('sr-only')) {
                                m.classList.remove('sr-only');
                            }
                            else {
                                m.classList.add('sr-only');
                            }
                            if (t.children && t.children[0].classList.contains('rotate-180')) {
                                t.children[0].classList.remove('rotate-180', 'upArrow');
                            }
                            else if (t.children && !t.children[0].classList.contains('rotate-180')) {
                                t.children[0].classList.add('rotate-180', 'upArrow');
                            }
                            const initialHeight = m.clientHeight;
                            m.style.height = '0px';
                            slideDownElement(m, initialHeight);
                        });

                        return false;
                    }
                });
            };

            window.onresize = resize;
            document.addEventListener("DOMContentLoaded", () => {
                const carouselFrame = document.getElementById('frame');
                setInterval(resize, 50);
                const galleryBuilder = () => {
                    if (carouselFrame && carouselFrame.complete)
                        resizeGallery();

                    setTimeout(galleryBuilder, 50);
                };

                galleryBuilder();
                setMenu();
            })