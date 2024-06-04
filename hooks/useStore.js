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



// export const useCourseStore = create((set) => ({
//   course:{},
//   courseData: (course) => set({course:course})
 
// })

// )




