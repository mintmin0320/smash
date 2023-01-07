import Lottie from 'react-lottie-player'
import group from '../../../public/group.json';
import errLottie from '../../../public/animation404.json';
import sunnyLottie from '../../../public/sunny.json';
import windyLottie from '../../../public/windy.json';

export function Animation() {
  return (
    <Lottie
      loop
      animationData={errLottie}
      play
    >
    </Lottie>
  );
}

export function AnimationGroup() {
  return (
    <Lottie
      loop
      animationData={group}
      play
    >
    </Lottie>
  );
}

export function SunAnimation() {
  return (
    <Lottie
      loop
      animationData={sunnyLottie}
      play
    >
    </Lottie>
  );
}

export function WindyAnimation() {
  return (
    <Lottie
      loop
      animationData={windyLottie}
      play
    >
    </Lottie>
  );
}

// export function RainAnimation() {
//   return (
//     <Lottie
//       loop
//       animationData={group}
//       play
//     >
//     </Lottie>
//   );
// }