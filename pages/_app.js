import Layout from "../components/Layout";
import "../styles/globals.css";
// 모듈이 아닌 css는 청사진 컴포넌트인 _app.js보다 먼저 불러올 수 없음
// next.js는 다른 컴포넌트보다 가장 먼저 _app.js를 봄
// next.js라는 프레임워크가 정해놓은 룰

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps}> </Component>
      {/* <style jsx global>{`
        a {
          background-color: black;
        }
      `}</style> */}
    </Layout>
  );
}
