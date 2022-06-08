import Header from '~/components/Layout/components/Header';

function HeaderOnly({ children }) {
   return (
      <div>
         <Header />
         <div class="container">
            <div class="content">{children}</div>
         </div>
      </div>
   );
}

export default HeaderOnly;
