import {
  SlashCommandNumberOption,
  SlashCommandSubcommandBuilder,
  SlashCommandUserOption,
} from "@discordjs/builders";
import { buildDAOField } from "./deposit-micro-dao";

const createMultipleUserAmountPairs = (cmd: SlashCommandSubcommandBuilder) => {
  for (let i = 1; i <= 10; i += 1) {
    cmd
      .addUserOption(
        new SlashCommandUserOption()
          .setName(`grantee${i}`)
          .setDescription(`grantee ${i}`)
          .setRequired(i === 1)
      )
      .addNumberOption(
        new SlashCommandNumberOption()
          .setName(`amount${i}`)
          .setDescription(`The grant amount for grantee #${i}`)
          .setRequired(i === 1)
          .setMaxValue(1000)
          .setMinValue(1)
      );
  }
};

const createFundingProposal = async () => {
  const cmd = new SlashCommandSubcommandBuilder()
    .setName("create-funding-proposal")
    .setDescription(
      "Create a proposal to send money to one or more people (at least one at most 10)"
    )
    .addStringOption(await buildDAOField());
  createMultipleUserAmountPairs(cmd);
  return cmd;
};

export { createFundingProposal };
