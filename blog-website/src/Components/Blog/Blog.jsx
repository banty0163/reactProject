import React from 'react'

function Blog() {
  return (
    <>
     <div>
        <h1 
          className="text-3xl font-bold text-center mt-10 mb-5"
            style={{ color: "blue" 
            , textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
            , textDecoration: "underline"
            , textTransform: "uppercase"
            , fontFamily: "Arial, sans-serif"
            , letterSpacing: "2px"
            , fontSize: "2.5rem"
            , lineHeight: "1.5"
            , backgroundColor: "rgba(255, 255, 255, 0.8)"
            , padding: "20px"
            , borderRadius: "10px"
            , boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
            , transition: "transform 0.3s ease, box-shadow 0.3s ease"
            , cursor: "pointer"
            , "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)"
            }
            , textAlign: "center"   
            }}
        >here is my all new Blogs Updates</h1>
    </div>

    
    </>
  )
}

export default Blog
   