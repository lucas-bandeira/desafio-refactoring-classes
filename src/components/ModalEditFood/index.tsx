import {useRef} from 'react';
import {FiCheckSquare} from 'react-icons/fi';

import {Form} from './styles';
import Modal, {IModalProps} from '../Modal';
import Input from '../Input';
import {FormHandles} from "@unform/core";
import {IFood} from "../Food";

interface IModalEditFoodProps extends IModalProps {
  handleUpdateFood: (food: IFood) => void;
  editingFood: IFood;
}

function ModalEditFood(props: IModalEditFoodProps) {
  const {isOpen, setIsOpen} = props;
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: IFood) => {

    props.handleUpdateFood(data);
    setIsOpen();
  };

  return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={formRef} onSubmit={handleSubmit} initialData={props.editingFood}>
          <h1>Editar Prato</h1>
          <Input name="image" placeholder="Cole o link aqui"/>

          <Input name="name" placeholder="Ex: Moda Italiana"/>
          <Input name="price" placeholder="Ex: 19.90"/>

          <Input name="description" placeholder="Descrição"/>

          <button type="submit" data-testid="edit-food-button">
            <div className="text">Editar Prato</div>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
  }

export default ModalEditFood;
