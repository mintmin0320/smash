// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';
// import { WindyAnimation, SunAnimation } from '../Lottie';

// export default function Weather() {
//   const [state, setState] = useState({
//     high: '',
//     low: '',
//     pty: '',
//   })

//   const getWeatherData = async () => {
//     const url = `/widget/weather`;
//     const res = await axios.get(url);
//     console.log(res);
//     try {
//       if (res.status === 200) {
//         setState({
//           ...state,
//           sky: res.data.sky,
//           high: res.data.high,
//           low: res.data.low,
//         });
//         console.log("날씨 조회 성공!");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     getWeatherData();
//   }, []);

//   return (
//     <Container>
//       <SkyState>
//         {state.sky === '1' ? <SunAnimation /> : <WindyAnimation />}
//       </SkyState>
//       <Temperatures>
//         <HighBox>
//           최고&nbsp;
//           {state.high}
//         </HighBox>
//         <LowBox>
//           최저&nbsp;
//           {state.low}
//         </LowBox>
//       </Temperatures>
//     </Container>
//   );
// };

// const Container = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `

// const SkyState = styled.div`
//   width: 100%;
//   height: 80%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

// const Temperatures = styled.div`
//   width: 100%;
//   height: 80%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

// const HighBox = styled.div`
//   width: 50%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: red;
// `

// const LowBox = styled.div`
//   width: 50%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: blue;
// `