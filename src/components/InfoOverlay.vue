<template>
    <div id="info-overlay" @click="$emit('close')" :class="{'closed': !open}">
        <div class="modal">
            <div class="title-bar">
                <h1>Information</h1>
                <button @click="$emit('close')"></button>
            </div>
            <div class="text">
                <p>
                    This project was started after watching <a href="https://www.youtube.com/watch?v=gKm0rwuQr3s"
                                                               target="_blank">Look Mum No Computer's video</a> where he
                    controls the backlights of his Gameboy Megamachine with Midi. This tool allows you to draw
                    animations
                    and export them to midi.
                    This was programmed in a hurry so that this can be released while the video is still fresh, and
                    because
                    of this it can contain some bugs.
                </p>
                <p>
                    On the left side, you see the current frame of the animation. You can activate or deactivate a
                    'pixel'
                    of the animation by clicking or dragging. On the right side, you see which frame you are currently
                    on.
                    Under 'Playback' , you can set the BPM and note length for the current animation.
                    Under those settings are the playback controls. By pressing the left arrow, you go back a frame, by
                    pressing the right arrow you advance a frame, and the center button will play or pause the
                    animation.
                </p>
                <p>
                    Under 'Frames' you can add or remove frames to or from the animation.
                </p>
                <p>
                    Under 'Import/Export' you can import JSON animation files, export JSON animation files and export
                    the
                    animation as Midi.
                    The Midi files can not be loaded back into this application, so I suggest to always save the
                    animation
                    to JSON.
                </p>
                <p>
                    There can be a problem with the Midi file. Looking at the Midi file in some midi editing programs,
                    the
                    notes can all be an octave too high. For this, I added a checkbox to lower the octave when
                    exporting.
                </p>
                <p>
                    Currently, this tool can only make animations for LMNC's Gameboy Megamachine, but if there is enough
                    interest, I will add the possibilty to make configs for your own Midi animation machines.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'InfoOverlay',
    props: ['open']
  };
</script>

<style lang="scss" scoped>
    @import '../scss/mixins/breakpoints';

    #info-overlay {
        position: fixed;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.75);
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: visibility 0.1s, opacity 0.1s;

        &.closed {
            visibility: hidden;
            opacity: 0;
        }

        .modal {
            width: calc(100% - 25px);
            height: calc(100% - 25px);
            border-radius: 5px;
            box-shadow: 0 0 25px rgba(0, 0, 0, 0.5), 0 -4px 0 0 inset rgba(0, 0, 0, 0.25);
            background: linear-gradient(152deg, darken(#673AB7, 0) 0%, darken(#673AB7, 5%) 100%);
            cursor: initial;
            display: flex;
            flex-direction: column;

            @include tablet {
                width: 85%;
                height: 85%;
            }

            @include desktop {
                width: 75%;
                height: 75%;
            }

            .title-bar {
                background-color: rgba(0, 0, 0, 0.1);
                padding: 10px 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                @include tablet {
                    padding: 15px 25px;
                }

                @include desktop {
                    padding: 25px 35px;
                }

                h1 {
                    margin: 0;
                    font-weight: 100;
                    font-size: 36px;
                    color: white;

                    @include tablet {
                        font-size: 42px;
                    }

                    @include desktop {
                        font-size: 48px;
                    }
                }

                button {
                    background-color: transparent;
                    background-image: url("../assets/img/icons/cross.svg");
                    border: none;
                    height: 30px;
                    width: 30px;
                    margin: 0;
                    padding: 0;
                    cursor: pointer;
                    opacity: 0.5;
                    transition: opacity 0.25s;
                    box-shadow: none;
                    background-size: 30px auto;

                    &:hover {
                        opacity: 0.75;
                    }

                    @include tablet {
                        height: 35px;
                        width: 35px;
                        background-size: 35px auto;
                    }

                    @include desktop {
                        height: 40px;
                        width: 40px;
                        background-size: 40px auto;
                    }
                }
            }

            .text {
                padding: 25px;
                overflow-y: scroll;

                p {
                    padding: 0 25px;
                    margin: 5px 0;
                    font-size: 24px;
                    font-weight: 200;
                    max-height: 100%;
                }
            }
        }
    }
</style>
