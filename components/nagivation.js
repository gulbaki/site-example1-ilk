import Link from "next/link";

function Nagivation() {
  return (
    <div>
      <nav>
        <Link href="/">
          <a>Anasayfa </a>
        </Link>
        <Link href="/about">
          <a>Hakkımızda </a>
        </Link>
      </nav>
    </div>
  );
}

export default Nagivation;
