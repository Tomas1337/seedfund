"""Add donations table

Revision ID: 5d2cc406a7ee
Revises: eb6879a62eaa
Create Date: 2021-10-17 17:46:15.145459

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5d2cc406a7ee'
down_revision = 'eb6879a62eaa'
branch_labels = None
depends_on = None


def upgrade():
    op.create_table('donations',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('obit_id', sa.Integer(), nullable=False),
    sa.Column('amount', sa.Numeric(precision=10, scale=2), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['obit_id'], ['obits.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )


def downgrade():
    op.drop_table('donations')
