import { tsUrl } from '@/config';
import {create} from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useCourseStore = create(persist(
  (set) => ({
    course:{},
  courseData: (course) => set({course:course})
  
  }),
  {
    name: 'course-storage', // unique name for the storage item
    storage: createJSONStorage(() => localStorage) // specify local storage as the storage
  }
));
export const useCookieStore = create(persist(
  (set) => ({
    cookie:{},
  cookieData: (cookie) => set({cookie:cookie})
  
  }),
  {
    name: 'cookie-storage', // unique name for the storage item
    storage: createJSONStorage(() => localStorage) // specify local storage as the storage
    
  }
));
export const useProfileStore = create(persist(
  (set) => ({
    profiles:{},
  profilesData: (profiles) => set({profiles:profiles})
  
  }),
  {
    name: 'profile-storage', // unique name for the storage item
    storage: createJSONStorage(() => localStorage) // specify local storage as the storage
    
  }
));

export const useOrderIDStore = create(persist(
  (set) => ({
    orderId:{},
  orderIdData: (orderId) => set({orderId:orderId})
  
  }),
  {
    name: 'orderId-storage', // unique name for the storage item
    storage: createJSONStorage(() => localStorage) // specify local storage as the storage
    
  }
));


export const useProductStore = create(persist((set) => ({
  classFor11: [],
  classFor12: [],
  classFor13: [],
  fetchData: async () => {
    try {
      const res = await fetch(`${tsUrl}/pdt/v1/product?category_id=3`, {
       method: "GET",
  redirect: "follow",
  headers: {
    'Accept': 'application/json',
  },
         });
         const data = await res.json();
         const item13 = data.products.filter((product) => product.class_for === "13");
         const item12 = data.products.filter((product) => product.class_for === "12");
         const item11 = data.products.filter((product) => product.class_for === "11");
            
      // Update Zustand store with filtered data
     
      set((state) => ({
        classFor11: item11,
        classFor12: item12,
        classFor13: item13,
      }));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
}),{
  name: 'userProductNeet-storage', // unique name for the storage item
  storage: createJSONStorage(() => localStorage) // specify local storage as the storage
  
}
));
export const useProductJEEStore = create(persist((set) => ({
  classFor11jee: [],
  classFor12jee: [],
  classFor13jee: [],
  fetchDataJee: async () => {
    try {
      const res = await fetch(`${tsUrl}/pdt/v1/product?category_id=2`, {
       method: "GET",
  redirect: "follow",
  headers: {
    'Accept': 'application/json',
  },
         });
         const data = await res.json();
         const item13 = data.products.filter((product) => product.class_for === "13");
         const item12 = data.products.filter((product) => product.class_for === "12");
         const item11 = data.products.filter((product) => product.class_for === "11");
            
      // Update Zustand store with filtered data
     
      set((state) => ({
        classFor11jee: item11,
        classFor12jee: item12,
        classFor13jee: item13,
      }));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
}),{
  name: 'userProductJee-storage', // unique name for the storage item
 storage: createJSONStorage(() => localStorage) // specify local storage as the storage
  
}));

export const useProductFoundationStore = create(persist((set) => ({
  classFor9: [],
  classFor10: [],
  fetchDataFoundation: async () => {
    try {
      const res = await fetch(`${tsUrl}/pdt/v1/product?category_id=4`, {
       method: "GET",
  redirect: "follow",
  headers: {
    'Accept': 'application/json',
  },
         });
         const data = await res.json();
         const item10 = data.products.filter((product) => product.class_for === "10");
         const item9 = data.products.filter((product) => product.class_for === "9");
            
      // Update Zustand store with filtered data
      // console.log(item10);
      set((state) => ({
        classFor9: item9,
        classFor10: item10,
      }));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
}),{
  name: 'userProductFoundation-storage', // unique name for the storage item
  storage: createJSONStorage(() => localStorage) // specify local storage as the storage
  
}
));




// export const useCourseStore = create((set) => ({
//   course:{},
//   courseData: (course) => set({course:course})
 
// })

// )




