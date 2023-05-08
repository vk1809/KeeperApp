
const year = new Date().getFullYear();

function Footer() {
  return (
    <div className="Footer">
      <p>{"Copyright@"+year}</p>
    </div>
  );
}

export default Footer;