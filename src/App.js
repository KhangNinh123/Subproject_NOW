import './App.css';
import Button from '@mui/material/Button';
const App = () => {
  return (
    <div className="homepage font-sans">
      {/* Header */}
      <header className="header text-center py-4 border-b">
        <p className="text-sm">Hotline Mua Hàng: <span className="text-red-500">0852 606 710</span> | Email CSKH: <a href="mailto:huynhtanhha2003@gmail.com" className="text-blue-500">huynhtanhha2003@gmail.com</a></p>
      </header>
      
      {/* Navbar */}
      <nav className="navbar flex justify-evenly px-10 py-4 bg-gray-100">
        <a href="#" className="nav-link">Trang Chủ</a>
        <a href="#" className="nav-link">Giới Thiệu</a>
        <a href="#" className="nav-link">Sản Phẩm</a>
        <a href="#" className="nav-link">Mới</a>
        <a href="#" className="nav-link">Hot</a>
        <a href="#" className="nav-link">Liên hệ</a>
      </nav>
      
      {/* Banner */}
      <section className="banner relative w-full h-80 flex justify-center items-center">
        <div className="text-center mrl-400px">
          <h2 className="text-2xl font-semibold">PHONG CÁCH DÀNH CHO CÁC CHÀNG</h2>
          <p className="text-gray-600">Bộ sưu tập áo thun phong cách 2025</p>
          <Button className="btn-primary mt-4">Xem sản phẩm</Button>
        </div>
      </section>

      {/* Product Sections */}
      <div className="container mx-auto py-10">
        <h3 className="section-title text-xl font-semibold text-center">SẢN PHẨM MỚI</h3>
        <div className="product-grid flex flex-wrap justify-between gap-4 mt-4">
          {/* Render sản phẩm mới */}
          <ProductCard name="Áo thun Wheel Devil" price="200,000 - 250,000 VND"   image="https://dosi-in.com/images/detailed/355/dosiin-the-collectors-ao-thun-den-collectors-essential-striped-ribblack-355871355871.jpg"/>
          <ProductCard name="Áo thun hồng MILK-XO" price="250,000 VND"  image='https://cf.shopee.vn/file/78806c12faac8b1c33b95badde076553'/>
          <ProductCard name="Áo thun xanh lá" price="200,000 - 250,000 VND" image='https://cf.shopee.vn/file/e54b7bd5c8f4af7f49eaf0e55567e6e4' />
          <ProductCard name="Áo thun trắng 100% Cotton" price="200,000 VND"  image='https://product.hstatic.net/200000054310/product/icon0025.jpg_ad0a2e5c75d1407babbcf9821d1c2094.jpg'/>
          <ProductCard name="Chân váy xếp ly" price="250,000 VND" image='https://product.hstatic.net/200000312421/product/chan-vay-xep-ly-trang_1_ccdd5c8dfcc24025ad1c655bd1fd556b_master.jpg' />
        </div>

        <h3 className="section-title text-xl font-semibold text-center mt-10">SẢN PHẨM BÁN CHẠY</h3>
        <div className="product-grid grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 justify-center">
          {/* Render sản phẩm bán chạy */}
          <ProductCard name="Chân váy xếp ly" price="250,000 VND" image='https://product.hstatic.net/200000312421/product/chan-vay-xep-ly-trang_1_ccdd5c8dfcc24025ad1c655bd1fd556b_master.jpg' />
          <ProductCard name="Quần jeans rách" price="350,000 VND"  image='https://down-vn.img.susercontent.com/file/3ac431cf41cc1b27038ac6e2511f3262' />
          <ProductCard name="Quần short nam" price="250,000 - 350,000 VND"  image='https://tse1.mm.bing.net/th?id=OIP.aalzJcl26WNlTo8_PM-SIgHaJn&pid=Api&P=0&h=180'/>
          <ProductCard name="Quần âu đen" price="600,000 VND"  image='https://buttons.vn/storage/06-quan-au/qa-0002-stretchtab-black-1-1.jpg'/>
          <ProductCard name="Áo thun Wheel Devil" price="200,000 - 250,000 VND"   image="https://dosi-in.com/images/detailed/355/dosiin-the-collectors-ao-thun-den-collectors-essential-striped-ribblack-355871355871.jpg"/>
          
        </div>
        <section className="  relative w-full h-80 flex justify-center items-center text-center align-center">
          <Button className="btn-primary mt-4 text-center">Xem thêm sản phẩm</Button>
        </section>
      </div>
    </div>  
  );
};

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="product-card border p-4 text-center">
      <img src={image} alt={name} className="product-image w-full h-40 object-cover" />
      <h4 className="product-name mt-2 font-semibold">{name}</h4>
      <p className="product-price text-gray-600">{price}</p>
    </div>
  );  
};

export default App;
