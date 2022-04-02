import { CommandInteraction } from "discord.js";
import { handleCreateFundingProposal } from "./handleCreateFundingProposal";
import { handleCreateMicroDAO } from "./handleCreateMDAO";
import { handleDepositMicroDAO } from "./handleDepositMDAO";
import { handleDissent } from "./handleDissent";

export const handleMicroDAO = async (interaction: CommandInteraction) => {
  const commandData = interaction.options.data;

  const subcommand = commandData[0]?.options?.[0];

  if (!subcommand) {
    return;
  }

  if (subcommand.name === "create") {
    handleCreateMicroDAO(subcommand, interaction);
  } else if (subcommand.name === "deposit") {
    handleDepositMicroDAO(subcommand, interaction);
  } else if (subcommand.name === "create-funding-proposal") {
    handleCreateFundingProposal(subcommand, interaction);
  } else if (subcommand.name === "dissent") {
    handleDissent(subcommand, interaction);
  }
};
