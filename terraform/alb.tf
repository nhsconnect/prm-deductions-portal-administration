resource "aws_alb_target_group" "alb-tg" {
  name        = "${var.environment}-${var.component_name}-tg"
  port        = 3000
  protocol    = "HTTP"
  vpc_id      = data.aws_ssm_parameter.deductions_private_vpc_id.value
  target_type = "ip"
  deregistration_delay = var.alb_deregistration_delay

  health_check {
    healthy_threshold   = 3
    unhealthy_threshold = 5
    timeout             = 5
    interval            = 10
    path                = "/health"
    port                = 3000
  }
}

resource "aws_alb_listener" "alb-listener" {
  load_balancer_arn = data.aws_ssm_parameter.deductions_private_alb_arn.value
  port              = "80"
  protocol          = "HTTP"

  default_action {
    type = "fixed-response"

    fixed_response {
      content_type = "text/plain"
      message_body = "Error"
      status_code  = "501"
    }
  }
}

resource "aws_alb_listener_rule" "pds-adaptor-alb-listener-rule" {
  listener_arn = aws_alb_listener.alb-listener.arn
  priority     = 200

  action {
    type             = "forward"
    target_group_arn = aws_alb_target_group.alb-tg.arn
  }

  condition {
    field  = "host-header"
    values = ["${var.environment}.${var.component_name}.patient-deductions.nhs.uk"]
  }
}