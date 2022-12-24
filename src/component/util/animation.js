import Lottie from 'react-lottie-player'
import group from '../../../public/group.json';
import errLottie from '../../../public/animation404.json';


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