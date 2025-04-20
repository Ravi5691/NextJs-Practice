
  export default function ProductLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (

         <div>
            {children}
          <footer style={{ backgroundColor: 'red', color: 'white', display: 'flex', justifyContent: 'center', padding: '10px', marginTop: '20px'}}>
            <h1>Product</h1>
          </footer>
         </div>
          
    )
  }
  