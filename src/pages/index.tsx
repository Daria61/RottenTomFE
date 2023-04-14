import { First, IMovie } from "../components/First";
import axios from "axios";
import Link from "next/link";

// interface myRet {
//   result: Array<IMovie>;
//   rowCount: number;
// }
// export default function Home() {
//   const [movies, setMovies] = useState<myRet>();
//   const { query } = useRouter();
//   const pageSize = query.id ? query.id : 1;

//   const getData = async () => {
//     const res = await axios.post("http://localhost:8000/api/movies", {
//       pageSize: pageSize,
//     });
//     setMovies(res.data);
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <>
//       <Link href="/list"> List </Link>
//       <First movies={movies && movies.result} />
//       {/* <PageNum pageAll={pageAll} /> */}
//     </>
//   );
// }

export default function Home(props: {
  message: string;
  result: Array<IMovie>;
  rowCount: number;
}) {
  return (
    <>
      <Link href="/list"> Listt </Link>
      <First movies={props.result} />
    </>
  );
}

export async function getServerSideProps(pageSize: string) {
  const res = await axios.post("http://localhost:8000/api/movies", {
    pageSize: 1,
  });

  return {
    props: {
      message: "Server side Props",
      result: res.data.result,
      rowCount: res.data.rowCount,
    },
  };
}
