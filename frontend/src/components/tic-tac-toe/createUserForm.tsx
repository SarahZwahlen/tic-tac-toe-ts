import { useState } from "react";
import { useTicTacToeContext } from "../../infrastructure/tictactoe.context";

type createUserFormProps = {
  number: number;
};

const CreateUserForm: React.FC<createUserFormProps> = ({ number }) => {
  const [playerName, setPlayerName] = useState("");
  const { createPlayer } = useTicTacToeContext();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    createPlayer(number, { name: playerName, combination: [] });
    setPlayerName("");
  };

  return (
    <form>
      <input
        type="text"
        placeholder={`Nom du joueur ${number}`}
        onChange={(e) => setPlayerName(e.target.value)}
        value={playerName}
      />
      <button onClick={handleClick}>Valider</button>
    </form>
  );
};

export default CreateUserForm;
