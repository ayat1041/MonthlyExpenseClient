import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogActions,
  DialogContent,
  Button,
  Input,
  Label,
  useId,
  makeStyles,
  shorthands,
  tokens,
  Field,
  Textarea,
} from "@fluentui/react-components";
import { IoMdAdd } from "react-icons/io";
import { DatePicker } from "@fluentui/react-datepicker-compat";

const useStyles = makeStyles({
  base: {
    display: "flex",
    flexDirection: "column",
  },
  field: {
    display: "grid",
    gridRowGap: tokens.spacingVerticalXXS,
    marginTop: tokens.spacingVerticalMNudge,
    ...shorthands.padding(tokens.spacingHorizontalMNudge),
  },
});

const CreatePlan = () => {
  const underlineId = useId("input-underline");
  const styles = useStyles();
  return (
    <div>
      <Dialog>
        <DialogTrigger disableButtonEnhancement>
          <Button size="large" icon={<IoMdAdd />} iconPosition="after">
            Create a Plan
          </Button>
        </DialogTrigger>
        <DialogSurface>
          <DialogBody>
            <DialogTitle>New Plan</DialogTitle>
            <DialogContent>
              <form>
                <div className={styles.base}>
                  <div className={styles.field}>
                    <Label htmlFor={underlineId}>Plan Name</Label>
                    <Input appearance="outline" id={underlineId} />
                  </div>
                  <div className={styles.fieldWrapper}>
                    <div className={styles.field}>
                      <Field label="Textarea with Outline appearance">
                        <Textarea
                          appearance="outline"
                          placeholder="type here..."
                          resize="both"
                        />
                      </Field>
                    </div>
                  </div>
                  <div className={styles.field}>
                    <Label htmlFor={underlineId}>Plan Description</Label>
                    <DatePicker
                      showWeekNumbers={true}
                      firstWeekOfYear={1}
                      showMonthPickerAsOverlay={true}
                      placeholder="Select a date..."
                      className={styles.control}
                    />
                  </div>
                </div>
              </form>
            </DialogContent>
            <DialogActions>
              <DialogTrigger disableButtonEnhancement>
                <Button appearance="secondary">Close</Button>
              </DialogTrigger>
              <Button style={{ backgroundColor: "#B91C1C", color: "white" }}>
                Save
              </Button>
            </DialogActions>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    </div>
  );
};

export default CreatePlan;
