// export default function CommonLayout({children,}: {children: React.ReactNode}) {
//   return (
//     <div className="flex flex-col min-h-screen">
//         Common Layout
//       {children}

//     </div>
//   )
// }


export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
   Common Layout
   {children}
   </>
  );
}
