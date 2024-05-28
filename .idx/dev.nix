# To learn more about how to use Nix to configure your environment

# see: https://developers.google.com/idx/guides/customize-idx-env

{ pkgs, ... }: {

  # Which nixpkgs channel to use.

  channel = "stable-23.11"; # or "unstable"

  # Use https://search.nixos.org/packages to find packages

  packages = [
    pkgs.unzip
    pkgs.python311Packages.pip
  ];

  # Sets environment variables in the workspace

  env = { };

  idx = {

    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"

    extensions = [

      # "vscodevim.vim"

    ];

    # Enable previews and customize configuration

    previews = {

      enable = false;

      previews = [

        {

          command = [
            "reflex"
            "run"
            "demo"
            "--"
            "--port"
            "$PORT"
            "--host"
            "0.0.0.0"
            "--disable-host-check"
          ];

          id = "web";

          manager = "web";

        }
      ];

    };

  };

}
