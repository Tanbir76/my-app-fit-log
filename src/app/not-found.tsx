import Link from "next/link";

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-5">
        <h1 className="text-8xl font-black text-[#C2F800]">
          404
        </h1>
        <h2 className="text-3xl font-bold">
          PAGE NOT FOUND
        </h2>

        <p className="text-[#9CA3AF]">
          The page you are looking for doesnot exist.
        </p>

        <Link
          href="/"
          className="btn bg-[#C2F800] text-black border-none hover:bg-[#C2F800]"
        >
          GO HOME
        </Link>
      </div>
    </main>
  );
};

export default NotFound;