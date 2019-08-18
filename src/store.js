import { writable } from 'svelte/store';

const serverType = {
  open: false,
  id: 0,
  name: "Example"
}

function createServerList(list) {
  const { subscribe, set, update } = writable(list);

  return {
    subscribe,
    setActive: (id) => update(n => {
      const newList = n;

      newList.forEach((e) => {
        e.open = false;
      });

      newList.forEach((e) => {
        if (e.id === id)
          e.open = true;
      });

      return newList;
    }),
    set: (x) => set(x) 
  };
}

export const servers = createServerList([
  {
    ...serverType,
    id: 0,
    name: "Example 1"
  },
  {
    ...serverType,
    id: 1,
    name: "Example 2"
  },{
    ...serverType,
    id: 2,
    name: "Example 3"
  }
]);

