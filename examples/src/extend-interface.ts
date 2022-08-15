interface Button {
  label: string,
  onClick: () => void
}

const button:Button = {
  label: 'Submit',
  onClick: () => {
    console.log('click');
    
  }
}

interface IconButton extends Button {
  icon: string;
}

const addToCartButton: IconButton = {
  icon: "Add To Cart",
  label: "Add To Cart",
  onClick: function (): void {
    console.log('click');  },
}

console.log(addToCartButton);
