// oop - abstraction
// idea
// implemenation pore krbo

/*
  1. interface
  2. abstract class
*/

// idea
// interface MediaPlayer {
//   play(): void;
//   pause(): void;
//   stop(): void;
// }

//implementation
class MusicPlayer implements MediaPlayer {
  play() {
    console.log("Playing music....");
  }
  pause() {
    console.log("Music paused... ");
  }
  stop() {
    console.log(`Music stopped`);
  }
}

const MPlayer = new MusicPlayer(); 
MPlayer.play();


//abstract

//idea
abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

//implementation
class Player extends MediaPlayer {
  play() {
    console.log(`Playing music !`);
  }
  pause(): void {
    console.log("Music is paused !");
  }
  stop(): void {
    console.log("Music is stopped !");
  }
}

const Player1 = new Player();
Player1.play();