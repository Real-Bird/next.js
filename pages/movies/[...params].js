import { useRouter } from "next/router";
import HeadTitle from "../../components/HeadTitle";

export default function Detail({ params }) {
  const router = useRouter();
  const [title, id] = params || [];
  console.log(router);
  return (
    <div>
      {(
        <div>
          <HeadTitle title={title} />
          <h2>{title}</h2>
          <div className="container">
            <div className="movie">
              <img
                src={`https://image.tmdb.org/t/p/w500/${router.query.poster_path}`}
              />
            </div>
            <p>{router.query.overview}</p>
          </div>
        </div>
      ) || "Loading..."}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
          animation: fadeIn 2s 1;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }

          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
