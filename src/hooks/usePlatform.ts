import useData from "./useData";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlarforms = () => useData<Platform>('/platforms/lists/parents');

export default usePlarforms;