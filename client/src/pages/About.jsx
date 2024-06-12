import React from 'react'

export default function About() {
  return (
    <div>
        <div class="sm:flex items-center max-w-screen-xl">
          <div class="sm:w-1/2 p-10">
              <div class="image object-center text-center">
                  <img src="../public/images/about.webp" alt='aboutus'></img>
              </div>
          </div>
          <div class="sm:w-1/2 p-5">
              <div class="text text-justify">
                  
                  <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">About <span class="text-slate-500">Tanmay</span><span class="text-slate-700">Estate</span>
                  </h2>
                  <p class="text-gray-700 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
                      doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
                      voluptatum.
                  </p>
                  <p class="text-gray-700 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
                      doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
                      voluptatum.
                  </p>
                  <p class="text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
                      doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
                      voluptatum.
                  </p>
              </div>
          </div>
        </div>
    </div>
  )
}
