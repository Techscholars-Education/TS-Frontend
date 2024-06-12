import {create} from 'zustand';
import { persist } from 'zustand/middleware';

export const useCourseStore = create(persist(
  (set) => ({
    course:{},
  courseData: (course) => set({course:course})
  
  }),
  {
    name: 'course-storage', // unique name for the storage item
    getStorage: () => localStorage, // specify local storage as the storage
  }
));
export const useCookieStore = create(persist(
  (set) => ({
    cookie:{},
  cookieData: (cookie) => set({cookie:cookie})
  
  }),
  {
    name: 'cookie-storage', // unique name for the storage item
    getStorage: () => localStorage, // specify local storage as the storage
    
  }
));
export const useProfileStore = create(persist(
  (set) => ({
    profiles:{},
  profilesData: (profiles) => set({profiles:profiles})
  
  }),
  {
    name: 'profile-storage', // unique name for the storage item
    getStorage: () => localStorage, // specify local storage as the storage
    
  }
));





// export const useCourseStore = create((set) => ({
//   course:{},
//   courseData: (course) => set({course:course})
 
// })

// )




