import { ChangeEvent, useState } from "react";

export const useForm = <T extends object>(initialForm: T) => {
    const [formState, setFormState] = useState(initialForm);
      
    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      const {name, value} = event.target;
      setFormState({...formState, [name]: value});    
    }

    const onReset = () => {
        setFormState({...initialForm});
    }

    return ({ ...formState, formState, onInputChange, onReset});
}

