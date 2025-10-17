import { Button } from "../../../../shared/ui/button";
import type { Task } from "../../model/task";

export interface ItemTasProps {
  task: Task;
}
export const ItemTask = ({ task }: ItemTasProps) => {
  return (
    <div>
      <Button text="Update" />
      <Button text="Delete" />
    </div>
  );
};
