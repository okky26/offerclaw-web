import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/Button/button";

const SearchBar = () => {
    return(
        <section className="w-full h-1/2 flex items-center justify-center lg:h-auto">
            <form action="" className="w-full h-full relative flex items-center justify-center">
                <input 
                    type="search" 
                    name="search" 
                    id="search" 
                    placeholder="search"
                    className="w-full h-12 bg-neutral-50/75 text-neutral-800 backdrop-blur-lg rounded-[16px] pl-4 capitalize lg:w-[555px]"    
                />
                <Button
                    type={'submit'}
                    style={'w-8 h-8 absolute right-[5%] lg:right-[32%]'}
                    content={
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            size='lg'
                            color="black"
                        />
                    }
                />
            </form>
        </section>
    )
}

export default SearchBar