import { useTicTacToeContext } from "../../infrastructure/tictactoe.context";
import Layout from "../layout/layout";
import CreateUserForm from "./createUserForm";
import "./tictactoe.scss";

const TicTacToe = () => {
  const { player1, player2 } = useTicTacToeContext();
  return (
    <Layout>
      <h1>Tic-tac-toe</h1>
      <CreateUserForm number={1} />
      <CreateUserForm number={2} />
      {player1 && <p>{player1.name}</p>}
      <p>VS</p>
      {player2 && <p>{player2.name}</p>}
    </Layout>
  );
};

export default TicTacToe;
