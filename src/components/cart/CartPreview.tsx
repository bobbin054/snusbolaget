export function CartPreview() {
    return (
      <div className="cart-preview">
        <div className="cart-preview__left mr-l">
          <i className="fa fa-shopping-cart"></i>1{/* {{ cartService.countTotalQuantity() }} */}
        </div>
        <div className="vl"></div>
        <div className="cart-preview__right">0 kr{/* {{ cartService.getTotalPrice() }} kr */}</div>
        <span className="fa fa-chevron-circle-right"></span>
      </div>
    );
  }