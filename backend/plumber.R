library(plumber)
# # 'plumber.R' is the location of the file shown above
pr("tarjetas_arbitros.R") %>%
  pr_run(port=8000)


# r <- plumb("tarjetas_arbitros.R")
# r$run(port=8000)